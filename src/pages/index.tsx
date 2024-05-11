import React, { useState, useEffect, useRef } from 'react';
import '../app/globals.css';  // 确保这个文件中引入了Tailwind CSS


export default function Home() {

  const [loginFlag, setLoginFlag] = useState(false);
  const [input, setInput] = useState('');
  const [allContexts, setAllContexts] = useState({});
  const [currentContext, setCurrentContext] = useState([]);
  const [displayedChats, setDisplayedChats] = useState([]);

  const [counter, setCounter] = useState(0);

  // 使用 refs 来存储每个输入框的引用
  const inputRefs = useRef({});

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleProcessData = () => {
    try {
      const data = JSON.parse(input);
      setAllContexts(data);
      setCurrentContext(data.root_context); // Start with root_context
    } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Invalid JSON input');
    }
  };

  // 进入页面，首次加载，aivinci展示unLoginContext
  useEffect(() => {
    let unLoginContext = [
      {
        "speaker": "aivinci",
        "message": "Welcome to Artela Renaissance!!"
      },
      {
        "speaker": "aivinci",
        "message": "Go ahead and connect your wallet—let's embark on this crypto renaissance journey together!",
        "btn": [
          {
            "txt": "Connect wallet",
            "msg": "Alrighty, here I come!",
            "nextContex": "@func@login"
          },
          {
            "txt": "Not now",
            "msg": "No now, thanks!",
            "nextContex": "rejectLoginContext"
          }
        ]
      }
    ]

    let rejectLoginContext = [
      {
        "speaker": "aivinci",
        "message": "Sure thing, you can connect your wallet anytime using the button in the top right corner!"
      }
    ]

    setAllContexts(prevContexts => ({
      ...prevContexts,
      rejectLoginContext: rejectLoginContext
    }));

    setAllContexts(prevContexts => ({
      ...prevContexts,
      unLoginContext: unLoginContext
    }));

    //Sure thing, you can connect your wallet anytime using the button in the top right corner!
    setCurrentContext(unLoginContext);
  }, []); // 空依赖数组，仅组件挂载时执行一次

  // 链接钱包后，aivinci展示登陆态的对话(常态，或者任务态)
  useEffect(() => {

    if (!loginFlag) { return; };

    async function doAsync() {
      // 先看看aivinci阵营任务完成了没有，没有则先开始这个任务
      const response = await fetch("/api/aivinciQuizTaskStatus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'query'
        })
      });

      const data = await response.json();
      if (data == "completed") {
        // 完成了后，就进入常态任务模式
        fetch("/api/pullContexts")
          .then(response => response.json())
          .then(data => {
            setAllContexts(data)
            setCurrentContext(data.root_context);
          })
          .catch(error => console.error('Error fetching data:', error));
      } else {
        // 执行aivinci阵营任务
        fetch("/api/aivinciQuizTask")
          .then(response => response.json())
          .then(data => {
            setAllContexts(data)
            setCurrentContext(data.root_context);
          })
          .catch(error => console.error('Error fetching data:', error));
      }
    }

    doAsync()

  }, [loginFlag]);

  useEffect(() => {
    let start = displayedChats.length;
    let end = displayedChats.length + currentContext.length;
    if (start < end) {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i + start < end) {
          let j = i;
          setDisplayedChats(prev => [...prev, currentContext[j]]);
          i++;
        }
        if (i + start >= end) clearInterval(intervalId);
      }, 500); // 每500毫秒显示一条消息
    }
  }, [currentContext]);

  // context可以配置执行函数，使用@func@xxx
  const contextFunctions = {
    // 登陆
    // 1. 连接钱包
    // 2. 成功后，返回一组context
    login: () => {
      console.log("exec login()")
      setLoginFlag(true);
      let ctx = {
        root_context: [
          {
            "speaker": "aivinci",
            "message": "Logged in successfully!"
          }
        ]
      };
      return ctx;
    },

    // 拉取一段新对话
    pullContexts: async () => {
      console.log("exec pullContexts()")

      const response = await fetch("/api/pullContexts", { method: 'POST' });
      const data = await response.json();

      return data;
    },

    // 完成任务
    completeTask: async () => {
      console.log("exec completeTask()")

      const response = await fetch("/api/completeTask", { method: 'POST' });
      const data = await response.json();

      return data;
    },

    // 完成任务（含input的）
    completeTaskWithInput: async (userInput: string) => {
      console.log("exec completeTask()")

      const response = await fetch("/api/completeTaskWithInput", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: userInput
        })
      });
      const data = await response.json();

      return data;
    },

    // 拒绝任务
    rejectTask: async () => {
      console.log("exec rejectTask()")

      const response = await fetch("/api/rejectTask", { method: 'POST' });
      const data = await response.json();

      return data;
    },

    // counter++
    addCounter: async () => {
      console.log("exec addCounter()")

      setCounter(counter + 1);
    },

    // counter--
    subCounter: async () => {
      console.log("exec subCounter()")

      setCounter(counter - 1);
    },

    // counter << 0
    resetCounter: async () => {
      console.log("exec resetCounter()")

      setCounter(0);
    },

    aivinciQuizeTask: async () => {
      console.log("exec aivinciQuizeTask()")

      const response = await fetch("/api/aivinciQuizTaskStatus", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'completeTask',
          counter: counter
        })
      });

      const data = await response.json();
      return data;
    }
  };

  const handleButtonAction = async (button, index) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }

    // 隐藏当前消息的按钮
    const updatedChats = [...displayedChats];
    updatedChats[index] = { ...updatedChats[index], buttonsDisplayed: false };

    // 添加新消息
    let userInput = "";
    if (button.input) {
      userInput = inputRefs.current[index]?.value || '';
      console.log("User input for button ", index, " is:", userInput);
      const newMessage = { speaker: "user", message: userInput, buttonsDisplayed: false }; // 假设用户消息不包含按钮
      updatedChats.push(newMessage);
    }

    const newMessage = { speaker: "user", message: button.msg, buttonsDisplayed: false }; // 假设用户消息不包含按钮
    updatedChats.push(newMessage);
    setDisplayedChats(updatedChats);

    // Check if button.nextContex is a special POST request format
    console.log("button.nextContex ", button.nextContex)
    console.log("button.nextContex obj ", allContexts[button.nextContex])

    // 是否需要post请求
    if (button.nextContex && button.nextContex.startsWith("@post@")) {
      const url = button.nextContex.split("@post@")[1];
      try {
        const response = await fetch(url, { method: 'POST' });
        const data = await response.json();
        console.log(data)

        setAllContexts(data)
        setCurrentContext(data.root_context);
      } catch (error) {
        console.error('Failed to fetch next context:', error);
        alert('Failed to load the next part of the conversation.');
      }
    } // 是否需要执行本地函数
    else if (button.nextContex && button.nextContex.startsWith("@func@")) {
      const functionName = button.nextContex.split("@func@")[1];
      const func = contextFunctions[functionName];

      if (func) {
        const data = await func(userInput);
        console.log("data of func,", data)
        setAllContexts(data)
        setCurrentContext(data.root_context);
      } else {
        console.error('Function not found:', functionName);
      }
    } else if (button.nextContex && allContexts[button.nextContex]) {
      console.log("button.nextContex refresh")
      setCurrentContext(allContexts[button.nextContex]);
    }

    // 处理post context函数
    if (button.postCtxFunc) {
      const func = contextFunctions[button.postCtxFunc];

      if (func) {
        await func();
      } else {
        console.error('Function not found:', button.postCtxFunc);
      }
    }
  };


  return (
    <main className="flex min-h-screen w-full items-center justify-between p-6">
      <div className="flex w-full">
        {/* JSON输入框和处理按钮 */}
        <div className="flex flex-col w-1/2 h-screen p-2">
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="Enter JSON data here..."
            className="w-full h-5/6 p-4 text-sm font-mono"
          />
          <button onClick={handleProcessData} className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
            Post Task
          </button>
          {/* 添加示例按钮 */}
          <button onClick={() => window.open('/template', '_blank')} className="mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors">
            View JSON Template
          </button>
        </div>
        {/* 聊天显示区 */}
        <div className="w-1/2 h-screen p-2 overflow-y-auto">
          {displayedChats.map((chat, index) => (
            <div key={index} className={`p-3 my-2 rounded ${chat.speaker === 'aivinci' ? 'bg-green-200' : 'bg-white border'} shadow`}
              style={{ alignSelf: chat.speaker === 'aivinci' ? 'flex-start' : 'flex-end' }}>
              {chat.message}
              {chat.btn && chat.buttonsDisplayed !== false && chat.speaker === 'aivinci' && (
                <div className="flex justify-start space-x-2 mt-2">
                  {chat.btn.map((button, btnIndex) => (
                    <div>
                      {button.input && (
                        <input
                          type="text"
                          placeholder={button.input}
                          ref={el => inputRefs.current[index] = el} // 创建引用
                          className="flex-1 p-1 border border-gray-300 rounded"
                        />
                      )}
                      <button key={btnIndex} onClick={() => handleButtonAction(button, index)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        {button.txt}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
