// pages/api/hello.js
export default function handler(req, res) {

    let quizContext = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Come join the crypto personality quiz and see which Renaissance figure you'd be in the crypto world!",
            },
            {
                "speaker": "aivinci",
                "message": "This Renaissance figure will accompany you on your cornerstone journey!",
            },
            {
                "speaker": "aivinci",
                "message": "Complete the task and claim your x crystals!!",
                "btn": [
                    {
                        "txt": "Come on!!",
                        "msg": "So cool, I can't wait to see which crypto Renaissance figure I am!",
                        "nextContex": ""
                    }
                ]
            }
        ]
    }

    let quizBank = [
        {
            "speaker": "aivinci",
            "message": "如果可以选择一项artela的能力带回文艺复兴时期，你会选择？",
            "btn": [
                {
                    "txt": "无敌的并行，我可以同时画10幅画了！",
                    "msg": "无敌的并行，我可以同时画10幅画了！",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "无限的aspect，我有无数可以组装的新能力！",
                    "msg": "无限的aspect，我有无数可以组装的新能力！",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "假如文艺复兴艺术家们决定创立一种新的加密货币，以下哪项可能是他们首先考虑的设计原则？",
            "btn": [
                {
                    "txt": "安全和匿名性",
                    "msg": "安全和匿名性",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "快速和高效的交易速度",
                    "msg": "快速和高效的交易速度",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "如果文艺复兴时代的哲学家们分析加密货币市场，他们最可能关注哪一个哲学问题？",
            "btn": [
                {
                    "txt": "加密货币是否会导致财富不均？",
                    "msg": "加密货币是否会导致财富不均？",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "加密货币是否真的能实现去中心化的承诺？",
                    "msg": "加密货币是否真的能实现去中心化的承诺？",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "你穿越回了文艺复兴时期你会怎么实现你的去中心化理想？",
            "btn": [
                {
                    "txt": "去你的中心化理想，我要去当达芬奇了！",
                    "msg": "去你的中心化理想，我要去当达芬奇了！",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "开创全新文艺复兴币！",
                    "msg": "开创全新文艺复兴币！",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "你会如何向文艺复兴时期的人们推荐ARTELA?",
            "btn": [
                {
                    "txt": "全新的！快速的！并行的！组装的！",
                    "msg": "全新的！快速的！并行的！组装的！",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "比达芬奇想点子的速度还要快！",
                    "msg": "比达芬奇想点子的速度还要快！",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Artela在文艺复兴时期可以类比为？",
            "btn": [
                {
                    "txt": "达芬奇的传世画作蒙娜丽莎！",
                    "msg": "达芬奇的传世画作蒙娜丽莎！",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "米开朗琪罗的经典作品大卫",
                    "msg": "米开朗琪罗的经典作品大卫",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        },
        {
            "speaker": "aivinci",
            "message": "你是会选择带着加密的记忆回去文艺复兴时期，还是带着文艺复兴时期来到加密？",
            "btn": [
                {
                    "txt": "回到文艺复兴，用未来知识对以前降维打击。",
                    "msg": "回到文艺复兴，用未来知识对以前降维打击。",
                    "postCtxFunc": "addCounter",
                    "nextContex": "",
                },
                {
                    "txt": "来到加密时期，用文艺复兴的理念创新加密。",
                    "msg": "来到加密时期，用文艺复兴的理念创新加密。",
                    "postCtxFunc": "subCounter",
                    "nextContex": "",
                },
            ]
        }, {
            "speaker": "aivinci",
            "message": "OOOMMMMGGG, BTC 跌破 60000美金，智者，你怎么看？",
            "btn": [
                {
                    "txt": "从技术分析角度，重要的是关注比特币价格图表的关键支撑和阻力水平",
                    "msg": "从技术分析角度，重要的是关注比特币价格图表的关键支撑和阻力水平",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "没事，市场就是这么波动的，继续看好比特币达到10万美金，坚持加仓！",
                    "msg": "没事，市场就是这么波动的，继续看好比特币达到10万美金，坚持加仓！",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "机会来了，此时的你手持1000 ETH, 此时的你会？",
            "btn": [
                {
                    "txt": "就拿着，合适的时候我还要继续加仓",
                    "msg": "就拿着，合适的时候我还要继续加仓",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "在做出任何决策之前，我会详细分析市场条件、技术指标和可能影响以太坊的宏观经济因素",
                    "msg": "在做出任何决策之前，我会详细分析市场条件、技术指标和可能影响以太坊的宏观经济因素",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "达芬奇在电脑前面，电脑上放一个BTC 的K线图(经过横盘暴涨的图），此时你会选择",
            "btn": [
                {
                    "txt": "看到这图形，只有一个选择：买！继续上！",
                    "msg": "看到这图形，只有一个选择：买！继续上！",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "虽然市场暴涨可能预示有利可图，但同时也伴随高风险。我会评估当前持仓的风险承受能力",
                    "msg": "虽然市场暴涨可能预示有利可图，但同时也伴随高风险。我会评估当前持仓的风险承受能力",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "鲍威尔（meme)还有1分钟要发言了，此时你的选择 ？",
            "btn": [
                {
                    "txt": "坚定看多，加仓！准备迎接好消息",
                    "msg": "坚定看多，加仓！准备迎接好消息",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "在重要发言前做出决策可能过于仓促。最明智的做法是等待发言内容明确后再做调整。",
                    "msg": "在重要发言前做出决策可能过于仓促。最明智的做法是等待发言内容明确后再做调整。",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "鲍威尔（meme) 还有1分钟要发言了，此前鹰派势力占据上风，此时你的选择 ？",
            "btn": [
                {
                    "txt": "鉴于鹰派势力可能导致市场波动，考虑设置止损和止盈点，以保护资产免受未预见的大幅波动影响",
                    "msg": "鉴于鹰派势力可能导致市场波动，考虑设置止损和止盈点，以保护资产免受未预见的大幅波动影响",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "美联储迟早要放水，BTC无论如何要上10万美金，每次危机都是加仓好机会",
                    "msg": "美联储迟早要放水，BTC无论如何要上10万美金，每次危机都是加仓好机会",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "文艺复兴时代的画家们正在决定通过加密货币来售卖他们的画作，以下哪种销售策略最适合？",
            "btn": [
                {
                    "txt": "设定一个带FOMO的竞价模型，炒热市场气氛，吸引更多投资者持续买入。",
                    "msg": "设定一个带FOMO的竞价模型，炒热市场气氛，吸引更多投资者持续买入。",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "为每幅艺术作品创建一个数字证书，使用区块链技术以确保作品的真实性和所有权的不可篡改性",
                    "msg": "为每幅艺术作品创建一个数字证书，使用区块链技术以确保作品的真实性和所有权的不可篡改性",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "如果你能和加密货币界的任何一位大佬共进晚餐，你最想选择谁？",
            "btn": [
                {
                    "txt": "Micheal Strategy - 我会一直买，直到100万美金",
                    "msg": "Micheal Strategy - 我会一直买，直到100万美金",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "巴菲特 - 现在看上去还像是骗局，但我会采取价值投资策略，等到BTC符合我的安全边际后才挥棒",
                    "msg": "巴菲特 - 现在看上去还像是骗局，但我会采取价值投资策略，等到BTC符合我的安全边际后才挥棒",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "惊天消息，以太方（ETF）创始人W神被美国政府拘留了",
            "btn": [
                {
                    "txt": "在处理此类消息时，确认信息的来源和准确性非常重要。避免由于未经验证的消息而做出急躁决策，总是寻找多个可信渠道的信息以支持决策",
                    "msg": "在处理此类消息时，确认信息的来源和准确性非常重要。避免由于未经验证的消息而做出急躁决策，总是寻找多个可信渠道的信息以支持决策",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "以太坊更加去中心化了，坚定看多，相信V神没事，加仓",
                    "msg": "以太坊更加去中心化了，坚定看多，相信V神没事，加仓",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Elon Musk宣布申请狗狗币ETF，智者请问怎么看？",
            "btn": [
                {
                    "txt": "尽管狗狗币起初作为一种meme币而存在，其价值主要由社区活动和互联网文化推动，这一新的ETF提案可能会增强其作为投资工具的合法性。然而，投资者在考虑投资前应详细了解其高波动性和非传统的价值驱动因素",
                    "msg": "尽管狗狗币起初作为一种meme币而存在，其价值主要由社区活动和互联网文化推动，这一新的ETF提案可能会增强其作为投资工具的合法性。然而，投资者在考虑投资前应详细了解其高波动性和非传统的价值驱动因素",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "大利好，加仓狗狗币",
                    "msg": "大利好，加仓狗狗币",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "如果有一种魔法加密货币可以实现你的一个愿望，你会希望它能做什么？",
            "btn": [
                {
                    "txt": "给我无限的子弹，买买买比特币",
                    "msg": "给我无限的子弹，买买买比特币",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "希望这种加密货币可以被用来资助全球范围内的教育项目，尤其是在那些教育资源不足的地区，让每个人都有机会接受良好的教育，增进全球的知识水平和理解力。",
                    "msg": "希望这种加密货币可以被用来资助全球范围内的教育项目，尤其是在那些教育资源不足的地区，让每个人都有机会接受良好的教育，增进全球的知识水平和理解力。",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "苹果公司宣布接受比特币支付购买iPhone，你怎么看？",
            "btn": [
                {
                    "txt": "这是数字货币的胜利，立即用BTC购买苹果产品，持续加仓BTC",
                    "msg": "这是数字货币的胜利，立即用BTC购买苹果产品，持续加仓BTC",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "苹果公司接受比特币支付标志着其对新兴市场趋势的适应和对技术创新的接受",
                    "msg": "苹果公司接受比特币支付标志着其对新兴市场趋势的适应和对技术创新的接受",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "研究表明加密货币交易者的平均睡眠时间不足六小时，请问你是",
            "btn": [
                {
                    "txt": "BTC迟早10万美金，定期定额买，晚上睡大觉",
                    "msg": "BTC迟早10万美金，定期定额买，晚上睡大觉",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "长期缺乏充足睡眠确实对我的身体和心理健康产生了不少负面影响。我开始增加了一些有氧运动，并尝试添加一些富含Omega-3的食物到我的饮食中。",
                    "msg": "长期缺乏充足睡眠确实对我的身体和心理健康产生了不少负面影响。我开始增加了一些有氧运动，并尝试添加一些富含Omega-3的食物到我的饮食中。",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "突发：比特币网络因未知技术问题全球范围内瘫痪一小时",
            "btn": [
                {
                    "txt": "这种突发事件提醒我们，尽管区块链技术在安全性和可靠性方面具有显著优势，它仍然可能面临未知技术故障的风险",
                    "msg": "这种突发事件提醒我们，尽管区块链技术在安全性和可靠性方面具有显著优势，它仍然可能面临未知技术故障的风险",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "不可能，BTC网路不可能出问题，相信数学的力量，每次Fud都是加仓的机会",
                    "msg": "不可能，BTC网路不可能出问题，相信数学的力量，每次Fud都是加仓的机会",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "2049年，BTC价格达到了100w 美金，此时你的状态",
            "btn": [
                {
                    "txt": "我的状态和反应与比特币价格无关，因为我不存在财务利益或情感投资",
                    "msg": "我的状态和反应与比特币价格无关，因为我不存在财务利益或情感投资",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "死守BTC，坚定看1000w",
                    "msg": "死守BTC，坚定看1000w",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "新的加密货币税法提案通过",
            "btn": [
                {
                    "txt": "新的税法可能会影响加密货币的交易和持有策略，重要的是仔细分析税法变更对个人投资的具体影响。",
                    "msg": "新的税法可能会影响加密货币的交易和持有策略，重要的是仔细分析税法变更对个人投资的具体影响。",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "虽然面临新的税收政策，但这也意味着加密货币被更广泛地接受和正式化，长期来看是好事，继续看涨！",
                    "msg": "虽然面临新的税收政策，但这也意味着加密货币被更广泛地接受和正式化，长期来看是好事，继续看涨！",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "加密货币市场首次超过股市总市值",
            "btn": [
                {
                    "txt": "这标志着加密货币从边缘市场成长为主流金融资产，这将引起更多的监管关注和可能的市场调整。",
                    "msg": "这标志着加密货币从边缘市场成长为主流金融资产，这将引起更多的监管关注和可能的市场调整。",
                    "postCtxFunc": "addCounter",
                    "nextContex": ""
                },
                {
                    "txt": "历史性的时刻！这证明了加密市场的强大潜力和成长速度，继续持有，期待To the Moon！",
                    "msg": "历史性的时刻！这证明了加密市场的强大潜力和成长速度，继续持有，期待To the Moon！",
                    "postCtxFunc": "subCounter",
                    "nextContex": ""
                }
            ]
        }
    ]


    // 1. 随机选择三个题目
    let selectedQuestions = [];
    while (selectedQuestions.length < 3) {
        let randomIndex = Math.floor(Math.random() * quizBank.length);
        if (!selectedQuestions.includes(quizBank[randomIndex])) {
            selectedQuestions.push(quizBank[randomIndex]);
        }
    }

    // 2. 将选中的题目加入 quizContext，并修改 nextContex
    selectedQuestions.forEach((question, index) => {
        quizContext[`quizBank_${index}`] = [question];
        question.btn.forEach(btn => {
            btn.nextContex = `quizBank_${index + 1}`;
        });
    });

    // 3. 修改 root_context 的 nextContex
    quizContext.root_context[2].btn[0].nextContex = "quizBank_0";

    // 4. 修正最后一个 quizBank_2 的 btn 指向 quizBank_3
    quizContext['quizBank_2'][0].btn.forEach(btn => {
        btn.nextContex = "@func@completeAivinciQuizeTask";
    });

    res.status(200).json(quizContext);
}