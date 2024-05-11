import React, { useState, useEffect, useRef } from 'react';
import '../app/globals.css';  // 确保这个文件中引入了Tailwind CSS
import { aivinciQuizTask, aivinciQuizTaskStatus, completeAivinciQuizeTask, pullContexts, completeTask, rejectTask, completeTaskWithInput } from '../api/aivinciApi';

import { unLoginContext, rejectLoginContext } from '../data/contextData';

export default function Home() {

  // **********************************
  // state介绍
  // **********************************

  // 1. 基础特性：登陆状态
  const [loginFlag, setLoginFlag] = useState(false);

  // 2. 基础特性：对话相关的状态
  const [allContexts, setAllContexts] = useState({});
  const [currentContext, setCurrentContext] = useState([]);
  const [displayedChats, setDisplayedChats] = useState([]);

  // 3. 进阶特性：给context func用的counter
  const [counter, setCounter] = useState(0);

  // 4. 测试特性：左侧的json编辑框state
  const [input, setInput] = useState('');

  // 5. 基础特性：用户输入框的ref
  const inputRefs = useRef({});

  // **********************************
  // useEffect介绍
  // **********************************
  // 1. 进入页面，首次加载，aivinci展示unLoginContext
  useEffect(() => {
    setAllContexts(prevContexts => ({
      ...prevContexts,
      rejectLoginContext: rejectLoginContext
    }));

    setAllContexts(prevContexts => ({
      ...prevContexts,
      unLoginContext: unLoginContext
    }));

    // 这个函数会触发CurrentContext的useEffect，把对话打印出来
    setCurrentContext(unLoginContext);
  }, []); // 空依赖数组，仅组件挂载时执行一次

  // 2. currentContext这个state的useEffect，会更新的对话打印出来
  useEffect(() => {

    //displayedChats是一个“已经打印”到窗口的state
    //displayedChats的更新，会触发html的刷新，把对话展示出来
    let start = displayedChats.length;
    let end = displayedChats.length + currentContext.length;

    //currentContext是需要显示的一组对话
    //需要把它加入到displayedChats里
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
  }, [currentContext]); // currentContext更新都会执行

  // 3. 链接钱包后，更新loginFlag，然后触发aivinci展示登陆态的对话
  useEffect(() => {

    // 这里看看有没有必要，因为只会登陆一次？
    if (!loginFlag) { return; };

    // 加载登陆后的对话内容
    // 用async是因为，里面要执行await
    async function doAsync() {

      // 先看看aivinci阵营任务（必做任务，且配置在前端）完成了没有，没有则先开始这个任务
      const data = await aivinciQuizTaskStatus();

      if (data == "completed") {
        // 完成了后，就进入常态任务模式，去后台拉取任务
        const data = await pullContexts();
        setAllContexts(data);
        setCurrentContext(data.root_context);
      } else {
        // 执行aivinci阵营任务
        const data = await aivinciQuizTask();
        setAllContexts(data);
        setCurrentContext(data.root_context);
      }
    }

    doAsync()

  }, [loginFlag]); // 登陆完成后会执行

  // **********************************
  // 函数介绍
  // **********************************

  // 1. 用户输入框的事件函数
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };


  // 2. contextFunctions，是context的button的nextContext里可以配置的“功能函数”
  // 这个函数会执行后，需要返回下一段对话
  const contextFunctions = {

    // 登陆函数
    // 1. 执行连接钱包
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
      return await pullContexts();
    },

    // 完成任务
    // 会向后台调用完成任务接口，并返回下一段对话
    completeTask: async () => {
      console.log("exec completeTask()")
      return await completeTask();
    },

    // 完成任务（含input的button才能配置这个函数）
    // 会向后台调用完成携带user input的任务接口，并返回下一段对话
    completeTaskWithInput: async (userInput: string) => {
      console.log("exec completeTaskWithInput()")
      return await completeTaskWithInput(userInput);
    },

    // 拒绝任务
    // 会向后台调用拒绝任务接口，并返回下一段对话
    rejectTask: async () => {
      console.log("exec rejectTask()")
      return await rejectTask();
    },

    // counter++
    // 这是一个异步函数，它会去累加一个counter
    addCounter: async () => {
      console.log("exec addCounter()")

      setCounter(counter + 1);
    },

    // counter--
    // 这是一个异步函数，它会去累减一个counter
    subCounter: async () => {
      console.log("exec subCounter()")

      setCounter(counter - 1);
    },

    // counter << 0
    // 这是一个异步函数，它会把counter重置为0
    resetCounter: async () => {
      console.log("exec resetCounter()")

      setCounter(0);
    },

    // 完成阵营任务
    // 请求后台，把阵营任务设置为完成
    completeAivinciQuizeTask: async () => {
      console.log("exec aivinciQuizeTask()")
      return await completeAivinciQuizeTask(counter);
    }
  };

  // 3. 按钮的处理接口
  const handleButtonAction = async (button, index) => {

    // 1. 如果按钮配置了url，则会打开这个url
    if (button.url) {
      window.open(button.url, '_blank');
    }

    // 2. 按钮被点击后，就不再继续显示
    // 如何实现隐藏：把按钮的buttonsDisplayed设置为false
    const updatedChats = [...displayedChats];
    updatedChats[index] = { ...updatedChats[index], buttonsDisplayed: false };

    // 3. 按下按钮后，会把用户的消息打印出来
    let userInput = "";

    // 3.1 如果有输入框，先把输入框的内容打印出来
    if (button.input) {
      userInput = inputRefs.current[index]?.value || '';
      console.log("User input for button ", index, " is:", userInput);
      const newMessage = { speaker: "user", message: userInput, buttonsDisplayed: false }; // 用户消息不包含按钮，所以buttonsDisplayed为false 
      updatedChats.push(newMessage);
    }

    // 3.2 其次，把按钮配置的msg字段，打印出来
    const newMessage = { speaker: "user", message: button.msg, buttonsDisplayed: false };
    updatedChats.push(newMessage);
    setDisplayedChats(updatedChats);

    console.log("button.nextContex ", button.nextContex)
    console.log("button.nextContex obj ", allContexts[button.nextContex])

    // 4. 处理下nextContex字段
    // nextContex有几种配置方式
    // * 直接配置，就会指向下一段对话
    // * 配置@post@，会去post指定url，获取下一段对话
    // * 配置@func@，会去执行指定contextFunctions，获取下一段对话

    // 4.1 处理：配置@post@，会去post指定url，获取下一段对话
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
    }
    // 4.2 处理：配置@func@，会去执行指定contextFunctions，获取下一段对话
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
    }

    // 4.3 处理：直接配置，就会指向下一段对话（在allContexts里面）
    else if (button.nextContex && allContexts[button.nextContex]) {
      console.log("button.nextContex refresh")
      setCurrentContext(allContexts[button.nextContex]);
    }

    // 5. 如果按钮配置了postCtxFunc，会在nextContex处理后，异步执行一个指定contextFunctions，不需要更新执行结果
    if (button.postCtxFunc) {
      const func = contextFunctions[button.postCtxFunc];

      if (func) {
        await func();
      } else {
        console.error('Function not found:', button.postCtxFunc);
      }
    }
  };

  // 4. 其他测试函数：处理json输入框的事件函数
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
