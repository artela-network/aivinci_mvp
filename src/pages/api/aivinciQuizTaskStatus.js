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
                            "message": "你加密文艺复兴的“Ai Vinci 爱分析”！你获得了3个水晶！",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "达芬奇的数字化体现，由人工智能驱动。完美融合了艺术与技术。最著名的艺术家，同时也深入科学领域。他拥有人类历史上所有数据的知识。对你的所有问题都有答案。只是不要问他关于加密货币市场的动向。就像维特鲁威人一样，他是完美中立无偏的。他的四条手臂和四条腿指向所有可能的方向。你继续提问，他只会告诉你去自己研究（DYOR）。",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "欢迎加入「Ai Vinci 爱分析」阵营，分享到社交媒体！继续获取3个水晶！",
                            "btn": [
                                {
                                    "txt": "分享",
                                    "msg": "好咧，我喜欢「Ai Vinci 爱分析」！",
                                    "url": "https://twitter.com/intent/post?text=Hello+Twitter%21&url=https%3A%2F%2Fexample.com&hashtags=ExampleTag",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ],
                    context_981_share: [
                        {
                            "speaker": "aivinci",
                            "message": "太酷了！这是你获得的水晶！",
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
            } else {
                let context = {
                    root_context: [
                        {
                            "speaker": "aivinci",
                            "message": "你加密文艺复兴的“米开朗增持罗”！",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "米开朗基罗的加长版(XL)。他创作了世界上一些最具启发性、最富表现力的艺术作品。XL是一个真正的信徒。他看到的未来是去中心化的。他对加密货币充满信仰。如果你问他，他的答案总是持有长期，非常长，非常非常长。",
                        },
                        {
                            "speaker": "aivinci",
                            "message": "欢迎加入「米开朗增持罗」阵营，分享到社交媒体！获取3个水晶！",
                            "btn": [
                                {
                                    "txt": "分享",
                                    "msg": "好咧，我喜欢「米开朗增持罗」！",
                                    "url": "https://twitter.com/intent/post?text=Hello+Twitter%21&url=https%3A%2F%2Fexample.com&hashtags=ExampleTag",
                                    "nextContex": "context_981_share"
                                }
                            ]
                        }
                    ],
                    context_981_share: [
                        {
                            "speaker": "aivinci",
                            "message": "太酷了！这是你获得的水晶！",
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
        default:
            // 处理未知的action
            return res.status(400).json({ error: "Invalid action parameter" });
    }
}
