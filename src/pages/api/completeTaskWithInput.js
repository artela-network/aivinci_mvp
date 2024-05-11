// pages/api/hello.js
export default function handler(req, res) {

    if (req.method !== 'POST') {
        // 确保只处理POST请求
        return res.status(405).json({ error: "Method not allowed, only POST requests are accepted" });
    }

    // 存储起来，暂时不校验
    const { input } = req.body;

    // 这个接口，将任务设置为完成，然后服务器要返回任务成功的对话。
    // 这段对话，是一个固定的格式，奖励用户对应的水晶
    // 如果后台异常，也返回一个固定的对话，让用户重新开始
    let success = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Thanks for participating in our daily task! ",
            },
            {
                "speaker": "aivinci",
                "message": "Your input will be verified later, and upon approval, you will receive the following crystals!",
            },
            {
                "speaker": "aivinci",
                "message": "Wanna keep chatting for a bit?",
                "btn": [
                    {
                        "txt": "Yes!",
                        "msg": "Thanks! Let's keep the chat going, shall we?",
                        "nextContex": "@func@pullContexts"
                    },
                    {
                        "txt": "Catch ya later!",
                        "msg": "Thanks! Catch ya later, I'm tied up with some stuff!",
                        "nextContex": "context_991_no"
                    }
                ]
            }
        ],
        context_991_no: [
            {
                "speaker": "aivinci",
                "message": "You go ahead and get busy, we can chat anytime!"
            }
        ]
    }
    
    let fail = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Oops, sorry",
            },
            {
                "speaker": "aivinci",
                "message": "I ran into a bit of a snag just now.",
            },
            {
                "speaker": "aivinci",
                "message": " Not sure if you completed the task... Could you give it another go?",
                "btn": [
                    {
                        "txt": "Yes!",
                        "msg": "It's okay!",
                        "nextContex": "@func@pullContexts"
                    },
                    {
                        "txt": "Catch ya later!",
                        "msg": "It's okay! Catch ya later, I'm tied up with some stuff!",
                        "nextContex": "context_992_no"
                    }
                ]
            }
        ],
        context_992_no: [
            {
                "speaker": "aivinci",
                "message": "You go ahead and get busy, we can chat anytime!"
            }
        ]
    }

    const contexts = [success, success, success, fail]

    // 返回任务完成后的对话，这里mock了，随机返回结果（4次有1次是提交失败）
    const randomIndex = Math.floor(Math.random() * 100) % contexts.length;

    res.status(200).json(contexts[randomIndex]);
}