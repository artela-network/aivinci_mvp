// pages/api/hello.js
export default function handler(req, res) {

    // 这是2条后台配置的常态对话
    let nonTaskContext101 = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Hey bro!",
            },
            {
                "speaker": "aivinci",
                "message": "Ever wonder why Artela's event is called \"Renaissance\"?",
            },
            {
                "speaker": "aivinci",
                "message": "It's because crypto is getting a little stale these days! Artela's dreaming of an ideal realm!",
                "btn": [
                    {
                        "txt": "Respect!",
                        "msg": "Respect! I'm all in with you guys!",
                        "nextContex": "context_101_respect"
                    },
                    {
                        "txt": "Catch ya later!",
                        "msg": "Catch ya later, I'm tied up with some stuff!",
                        "nextContex": "context_101_end"
                    }
                ]
            }
        ],
        context_101_respect: [
            {
                "speaker": "aivinci",
                "message": "Thanks for the pep talk!",
                "btn": [
                    {
                        "txt": "Keep chatting!!",
                        "msg": "Let's keep the chat rolling!",
                        "nextContex": "@func@pullContexts"
                    }
                ]
            }
        ],
        context_101_end: [
            {
                "speaker": "aivinci",
                "message": "You go ahead and get busy, we can chat anytime!"
            }
        ]
    }

    let nonTaskContext102 = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Hey bro!",
            },
            {
                "speaker": "aivinci",
                "message": "The first \"+\" in EVM++ stands for \"Scalability\" which includes features like \"Parallel Execution\" and \"Elastic Block Space.\"",
            },
            {
                "speaker": "aivinci",
                "message": "Got it?",
                "btn": [
                    {
                        "txt": "Pretty cool👍",
                        "msg": "Pretty cool👍",
                        "nextContex": "context_102_cool"
                    },
                    {
                        "txt": "Catch ya later!",
                        "msg": "Catch ya later, I'm tied up with some stuff!",
                        "nextContex": "context_102_end"
                    }
                ]
            }
        ],
        context_102_cool: [
            {
                "speaker": "aivinci",
                "message": "Thanks for the pep talk!",
                "btn": [
                    {
                        "txt": "Keep chatting!!",
                        "msg": "Let's keep the chat rolling!",
                        "nextContex": "@func@pullContexts"
                    },
                    {
                        "txt": "Catch ya later!",
                        "msg": "Catch ya later, I'm tied up with some stuff!",
                        "nextContex": "context_102_end"
                    }
                ]
            }
        ],
        context_102_end: [
            {
                "speaker": "aivinci",
                "message": "You go ahead and get busy, we can chat anytime!"
            }
        ]
    }

    const contexts = [nonTaskContext101, nonTaskContext102]

    // 没有任务时，会读取聊天库，随机加载常态对话

    const randomIndex = Math.floor(Math.random() * 100) % contexts.length;

    res.status(200).json(contexts[randomIndex]);
}