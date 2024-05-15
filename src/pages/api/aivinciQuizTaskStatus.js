// pages/api/cache.js
let cache = false; // 简单的内存缓存

export default function handler(req, res) {
    if (req.method !== 'POST') {
        // 确保只处理POST请求
        return res.status(405).json({ error: "Method not allowed, only POST requests are accepted" });
    }

    const { action, counter } = req.body;

    if (!action) {
        return res.status(400).json({ error: "Missing flag or action parameter" });
    }

    switch (action) {
        case 'query':
            // 处理查询逻辑
            if (cache) {
                return res.status(200).json("completed");
            } else {
                return res.status(200).json("uncomplete");
            }
        case 'completeTask':
            // 处理修改逻辑
            if (cache) {
                let context = {
                    root_context: [
                        {
                            "speaker": "aivinci",
                            "message": "你已经做过这个任务了！",
                            "btn": [
                                {
                                    "txt": "和我聊天，探索更多任务!",
                                    "msg": "Respect! I'm all in with you guys!",
                                    "nextContex": "@func@pullContexts"
                                },
                                {
                                    "txt": "Catch ya later!",
                                    "msg": "Catch ya later, I'm tied up with some stuff!",
                                    "nextContex": "context_101_end"
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

                return res.status(200).json(context);
            }

            cache = true;  // 设置或更新flag为true
            console.log("set cahche as true:", cache);

            if (counter > 0) {
                let context = {
                    root_context: [
                        {
                            "speaker": "aivinci",
                            "message": "Your answer is fascinating!",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "According to my mysterious quiz 🔮, I see you have a unique rationality! The family at the \"Ai Vinci\" Camp can't wait for you to join!",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "Da Vinci’s digital incarnation powerd by Ai. Perfect mix of art and technology. His four arms and four legs are pointing to every possible direction. You get a perfectly researched and reasoned answer without knowing what to do. You keep asking, he’ll just tell you to DYOR.",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "Welcome to join the \"Ai Vinci\" camp! Share on social media and get 10 crystals!",
                            "btn": [
                                {
                                    "txt": "Share",
                                    "msg": "Great test! Let me share!",
                                    "url": "https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20Just%20joined%20%40Artela_Network%27s%20%23AiVinci%20Camp!%20%F0%9F%96%8A%EF%B8%8F%20Do%20your%20own%20research%2C%20see%20the%20potential%2C%20and%20come%20aboard!%0A%0AExplore%20%26%20join%20me%20to%20boost%20rewards!%0A%0A%23Artela%20%23Renaissance%0Ahttps%3A%2F%2Frenaissance-frontend.vercel.app%2Fvision%3Ft%3Da",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ],
                    context_981_share: [
                        {
                            "speaker": "aivinci",
                            "message": "太酷了！把你的Post填到这里给我验证吧！",
                            "btn": [
                                {
                                    "txt": "Submit",
                                    "msg": "here you are!",
                                    "type": "input",
                                    "input": "your twitter url...",
                                    "match": "^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?].*)?$",
                                    "matchFail": "",
                                    "nextContex": "@func@completeTaskWithInput"
                                },
                                {
                                    "txt": "Catch ya later!",
                                    "msg": "Catch ya later, I'm tied up with some stuff!",
                                    "nextContex": "context_101_end"
                                }
                            ]
                        }
                    ],
                    context_101_match_fail: [
                        {
                            "speaker": "aivinci",
                            "message": "Your post verify fail! do you wanna try again?",
                            "btn": [
                                {
                                    "txt": "Try again",
                                    "msg": "Let me try again!",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ]
                    ,
                    context_101_end: [
                        {
                            "speaker": "aivinci",
                            "message": "You go ahead and get busy, we can chat anytime!"
                        }
                    ]
                }

                return res.status(200).json(context);
            } else {
                let context = {

                    root_context: [
                        {
                            "speaker": "aivinci",
                            "message": "Your answer is fascinating!",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "According to my mysterious quiz 🔮, I see you have a unique sensibility! The family at the \"Michextralooong\" Camp can't wait for you to join!",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "The extra long(XL) version of Michelangelo. He creates some of the most inspiring, expressive artwork in the world. He sees the future as decentralised. He has faith in crypto. If you ask him, his answer is always going long, very long, Michextralooong.",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "Welcome to join the \"Ai Vinci\" camp! Share on social media and get 10 crystals!",
                            "btn": [
                                {
                                    "txt": "Share",
                                    "msg": "Great test! Let me share!",
                                    "url": "https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20Joined%20%40Artela_Network%20%23Michextralooong%20Camp%20for%20the%20Token%20Airdrop!%20%20%241M%20in%20%23BTC%20could%20be%20ours.%20%0A%0A%23Artela%20%23Renaissance%0A%0ABoost%20rewards%20with%20my%20link%3A%20https%3A%2F%2Frenaissance-frontend.vercel.app%2Fvision%3Ft%3Dm",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ],
                    context_981_share: [
                        {
                            "speaker": "aivinci",
                            "message": "太酷了！把你的Post填到这里给我验证吧！",
                            "btn": [
                                {
                                    "txt": "Submit",
                                    "msg": "here you are!",
                                    "type": "input",
                                    "input": "your twitter url...",
                                    "match": "^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?].*)?$",
                                    "matchFail": "",
                                    "nextContex": "@func@completeTaskWithInput"
                                },
                                {
                                    "txt": "Catch ya later!",
                                    "msg": "Catch ya later, I'm tied up with some stuff!",
                                    "nextContex": "context_101_end"
                                }
                            ]
                        }
                    ],
                    context_101_match_fail: [
                        {
                            "speaker": "aivinci",
                            "message": "Your post verify fail! do you wanna try again?",
                            "btn": [
                                {
                                    "txt": "Try again",
                                    "msg": "Let me try again!",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ]
                    ,
                    context_101_end: [
                        {
                            "speaker": "aivinci",
                            "message": "You go ahead and get busy, we can chat anytime!"
                        }
                    ]
                }

                return res.status(200).json(context);
            }
        default:
            // 处理未知的action
            return res.status(400).json({ error: "Invalid action parameter" });
    }
}
