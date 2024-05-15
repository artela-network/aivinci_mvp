// pages/api/hello.js
export default function handler(req, res) {

    let quizContext = {

        root_context: [
            {
                "speaker": "aivinci",
                "message": "Welcome to the Cornerstone stage!",
            },
            {
                "speaker": "aivinci",
                "message": "🎭 Let’s dive into a fun game to start our journey!",
            },
            {
                "speaker": "aivinci",
                "message": "Test three intriguing questions! Unveil your unique crypto persona— #AiVinci or #Michextralooong",
            },
            {
                "speaker": "aivinci",
                "message": "Trust your instincts, make your choices! Earn your first crystal reward!!",
                "btn": [
                    {
                        "txt": "Come on!!",
                        "msg": "So cool, I can't wait to see my crypto persona!",
                        "nextContex": ""
                    }
                ]
            }
        ]
    }

    let quizBank = [
        {
            "speaker": "aivinci",
            "message": "BTC fell below 60,000 US dollars, wise man, what do you think?",
            "btn": [
                {
                    "txt": "Look at key support and resistance levels on the Bitcoin chart.",
                    "msg": "Look at key support and resistance levels on the Bitcoin chart.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Stay optimistic, buy more BTC!💰",
                    "msg": "Stay optimistic, buy more BTC!💰",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Now you hold 1000 ETH, what will you do?",
            "btn": [
                {
                    "txt": "Hold tight, wait for the right moment to add more.",
                    "msg": "Hold tight, wait for the right moment to add more.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Analyze market conditions before deciding.",
                    "msg": "Analyze market conditions before deciding.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Da Vinci is in front of the computer, looking at a surging BTC chart. Choose:",
            "btn": [
                {
                    "txt": "Buy! Keep going! 🙌",
                    "msg": "Buy! Keep going! 🙌",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Evaluate risks before buying impulsively.",
                    "msg": "Evaluate risks before buying impulsively.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Powell has one minute left to speak. Choose:",
            "btn": [
                {
                    "txt": "Buy more! Good news coming! 💥",
                    "msg": "Buy more! Good news coming! 💥",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Wait for speech content before adjusting.",
                    "msg": "Wait for speech content before adjusting.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Shocking news, Ethereum (ETF) founder Vitalik detained!",
            "btn": [
                {
                    "txt": "Confirm news accuracy before reacting.",
                    "msg": "Confirm news accuracy before reacting.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Increase ETH holdings, V God is fine!",
                    "msg": "Increase ETH holdings, V God is fine!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Elon Musk announced Dogecoin ETF. Your take?",
            "btn": [
                {
                    "txt": "Understand volatility before investing.",
                    "msg": "Understand volatility before investing.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Buy Dogecoin! 🐶",
                    "msg": "Buy Dogecoin! 🐶",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "If there was a magic that could fulfill one cryptocurrency wish of yours, what would you wish for?",
            "btn": [
                {
                    "txt": "More BTC, please!",
                    "msg": "More BTC, please!",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Fund global education projects. 📚",
                    "msg": "Fund global education projects. 📚",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Apple accepts Bitcoin for iPhones. Thoughts?",
            "btn": [
                {
                    "txt": "Adaptation to market trends.",
                    "msg": "Adaptation to market trends.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Victory for digital currency, buy more BTC!",
                    "msg": "Victory for digital currency, buy more BTC!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Cryptocurrency traders sleep less than six hours. Thoughts?",
            "btn": [
                {
                    "txt": "Sleepless nights for BTC!🍷",
                    "msg": "Sleepless nights for BTC!🍷",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Prioritize health, improve sleep habits.",
                    "msg": "Prioritize health, improve sleep habits.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Bitcoin network down globally for an hour. Your reaction?",
            "btn": [
                {
                    "txt": "Prepare for unexpected technical issues.",
                    "msg": "Prepare for unexpected technical issues.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "BTC is invincible, buy more!",
                    "msg": "BTC is invincible, buy more!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "BTC hits 1 million US dollars in 2049. Your status?",
            "btn": [
                {
                    "txt": "No emotional investment, unaffected.🧘",
                    "msg": "No emotional investment, unaffected.🧘",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Hold tight for 1,000,000!",
                    "msg": "Hold tight for 1,000,000!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "New Cryptocurrency Tax Law Proposal Passed. Thoughts?",
            "btn": [
                {
                    "txt": "Analyze impact on investments.",
                    "msg": "Analyze impact on investments.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Crypto acceptance grows, stay bullish!🤟",
                    "msg": "Crypto acceptance grows, stay bullish!🤟",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Cryptocurrency market exceeds total stock market capitalization",
            "btn": [
                {
                    "txt": "Mainstream acceptance, expect regulations.",
                    "msg": "Mainstream acceptance, expect regulations.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Historic moment! Hold tight for the moon!",
                    "msg": "Historic moment! Hold tight for the moon!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "OMG! BTC took a dive below 60,000 US dollars! What's the wise man's take?",
            "btn": [
                {
                    "txt": "Check out the key support and resistance levels on the Bitcoin chart.",
                    "msg": "Check out the key support and resistance levels on the Bitcoin chart.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Chill, just load up on more BTC! 💰",
                    "msg": "Chill, just load up on more BTC! 💰",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Now that you're sitting on 1000 ETH, what's your next move?",
            "btn": [
                {
                    "txt": "Take a moment to scrutinize market dynamics before making your move.",
                    "msg": "Take a moment to scrutinize market dynamics before making your move.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Hold steady, bide your time for the perfect opportunity to bulk up. ✊",
                    "msg": "Hold steady, bide your time for the perfect opportunity to bulk up. ✊",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Da Vinci is in front of the computer, looking at a surging BTC chart. Choose:",
            "btn": [
                {
                    "txt": "Think twice before diving headfirst into this frenzy. 🎸",
                    "msg": "Think twice before diving headfirst into this frenzy. 🎸",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Running through my mind? Buy! Ride that wave! 🙌",
                    "msg": "Running through my mind? Buy! Ride that wave! 🙌",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "With one minute left on the clock, Powell's about to address the world. What's the vibe?",
            "btn": [
                {
                    "txt": "Hold your horses until you hear what he's got to say.🐴",
                    "msg": "Hold your horses until you hear what he's got to say.🐴",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Load up on more! Good vibes incoming! 💥",
                    "msg": "Load up on more! Good vibes incoming! 💥",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Hold onto your hats, folks! ETF founder W God's been detained!",
            "btn": [
                {
                    "txt": "Check the facts before you start flipping out.",
                    "msg": "Check the facts before you start flipping out.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Load up on ETFs! W God's got this! Let's be his guardian angel. 😇",
                    "msg": "Load up on ETFs! W God's got this! Let's be his guardian angel. 😇",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Elon Musk drops the bomb 💥: Dogecoin ETF on the horizon. What's your move?",
            "btn": [
                {
                    "txt": "Know the game before you start playing.",
                    "msg": "Know the game before you start playing.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Snatch it up! Doggy's my lucky charm! 🐶",
                    "msg": "Snatch it up! Doggy's my lucky charm! 🐶",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Imagine a magical cryptocurrency that grants youone wish. What's your dream for it?",
            "btn": [
                {
                    "txt": "I wish for a bottomless ammo crate to fuel my Bitcoin spree! 🔫",
                    "msg": "I wish for a bottomless ammo crate to fuel my Bitcoin spree! 🔫",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Let's fund global education initiatives. 📚",
                    "msg": "Let's fund global education initiatives. 📚",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Apple jumps on the Bitcoin bandwagon for iPhones. What's the buzz?",
            "btn": [
                {
                    "txt": "Just Apple keeping up with the digital Joneses.",
                    "msg": "Just Apple keeping up with the digital Joneses.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Big win for crypto! Time to stock up on more BTC！",
                    "msg": "Big win for crypto! Time to stock up on more BTC！",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Crypto traders burning the midnight oil, catching less than six hours of shut-eye. What's the verdict?",
            "btn": [
                {
                    "txt": "Prioritize those Z's, folks. Your health's worth more than any trade.",
                    "msg": "Prioritize those Z's, folks. Your health's worth more than any trade.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Sleepless nights, fueled by the BTC thrill! 🍷",
                    "msg": "Sleepless nights, fueled by the BTC thrill! 🍷",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Holy smokes! Bitcoin's global network goes dark for an hour. How do you react?",
            "btn": [
                {
                    "txt": "Expect the unexpected in this wild crypto ride.",
                    "msg": "Expect the unexpected in this wild crypto ride.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "BTC's like the Terminator, unstoppable! Time to grab more!",
                    "msg": "BTC's like the Terminator, unstoppable! Time to grab more!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "BTC rockets to 1 million US dollars by 2049. How do you feel?",
            "btn": [
                {
                    "txt": "Zen mode activated, no emotional rollercoasters for me. 🧘",
                    "msg": "Zen mode activated, no emotional rollercoasters for me. 🧘",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Strap in tight, we're aiming for the moon! 🚀",
                    "msg": "Strap in tight, we're aiming for the moon! 🚀",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "The New Cryptocurrency Tax Law Proposal is in!",
            "btn": [
                {
                    "txt": "Let's crunch the numbers and see how this shakes up our investments.",
                    "msg": "Let's crunch the numbers and see how this shakes up our investments.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Big news for the crypto realm! Bulls, unite! 🤟",
                    "msg": "Big news for the crypto realm! Bulls, unite! 🤟",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Cryptocurrency market surpasses the total stock market capitalization. Your thoughts?",
            "btn": [
                {
                    "txt": "Mainstream's knocking on our door. Brace for regulations.",
                    "msg": "Mainstream's knocking on our door. Brace for regulations.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                }, {
                    "txt": "History in the making! Hold on tight, we're headed for the moon! 🌕",
                    "msg": "History in the making! Hold on tight, we're headed for the moon! 🌕",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Powell (meme): With just one minute remaining, let's weigh our options. The hawks once had the upper hand. What's the call now?",
            "btn": [
                {
                    "txt": "In a world of soaring hawks, it's wise to secure your assets from sudden dives.",
                    "msg": "In a world of soaring hawks, it's wise to secure your assets from sudden dives.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "When the Federal Reserve finally lets the floodgates open, BTC's journey to $100,000 is inevitable! 👊",
                    "msg": "When the Federal Reserve finally lets the floodgates open, BTC's journey to $100,000 is inevitable! 👊",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Artistic Revival: Renaissance painters are diving into the world of cryptocurrency for art sales. Which sales tactic reigns supreme?",
            "btn": [
                {
                    "txt": "Elevate each masterpiece with a digital certificate, anchored in blockchain. ⚖",
                    "msg": "Elevate each masterpiece with a digital certificate, anchored in blockchain. ⚖",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Ignite the market with FOMO-driven bidding wars and luring in eager investors.",
                    "msg": "Ignite the market with FOMO-driven bidding wars and luring in eager investors.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Crypto Connoisseur Dinner: If you could dine with any cryptocurrency bigwig, who'd make the cut? 🍽",
            "btn": [
                {
                    "txt": "While it may seem like a wild ride, I'll play the long game with a value investment approach, waiting for BTC to hit my safety net before making moves.",
                    "msg": "While it may seem like a wild ride, I'll play the long game with a value investment approach, waiting for BTC to hit my safety net before making moves.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Micheal Strategy: I'll keep buying until BTC hits $1 million.",
                    "msg": "Micheal Strategy: I'll keep buying until BTC hits $1 million.",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Choose one of Artela's abilities to bring back the Renaissance:",
            "btn": [
                {
                    "txt": "Picture this: painting ten masterpieces at once with invincible parallelism!🖼",
                    "msg": "Picture this: painting ten masterpieces at once with invincible parallelism!🖼",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Unlock infinite possibilities and countless new abilities with Artela's infinite aspects!",
                    "msg": "Unlock infinite possibilities and countless new abilities with Artela's infinite aspects!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "If Renaissance artists created a cryptocurrency, what design principle might they prioritize?",
            "btn": [
                {
                    "txt": "Keeping it hush-hush and secure, like hiding treasures in the shadows.",
                    "msg": "Keeping it hush-hush and secure, like hiding treasures in the shadows.",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Speedy transactions faster than a Renaissance carriage ride!🐎",
                    "msg": "Speedy transactions faster than a Renaissance carriage ride!🐎",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "If Renaissance philosophers analyzed the cryptocurrency market, what question might they focus on?",
            "btn": [
                {
                    "txt": "Will cryptocurrencies make the rich richer and the poor poorer, or is it all just gold in the wind?",
                    "msg": "Will cryptocurrencies make the rich richer and the poor poorer, or is it all just gold in the wind?",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Can cryptocurrencies truly break the chains of centralized power, or will the same old kings sit on digital thrones?",
                    "msg": "Can cryptocurrencies truly break the chains of centralized power, or will the same old kings sit on digital thrones?",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "How would you realize decentralization in the Renaissance?",
            "btn": [
                {
                    "txt": "Channeling your inner AI Vinci to spark a creative revolution that spreads like wildfire!",
                    "msg": "Channeling your inner AI Vinci to spark a creative revolution that spreads like wildfire!",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Strike up the band and mint a Renaissance coin for the people, by the people!",
                    "msg": "Strike up the band and mint a Renaissance coin for the people, by the people!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "How would you recommend ARTELA to Renaissance people?",
            "btn": [
                {
                    "txt": "Step right up and witness the marvel of ARTELA! It's new, it's speedy, it's like having a factory of ideas!",
                    "msg": "Step right up and witness the marvel of ARTELA! It's new, it's speedy, it's like having a factory of ideas!",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Leapfrog Leonardo da Vinci with ARTELA's lightning-fast innovation and a fountain of ideas! 💡",
                    "msg": "Leapfrog Leonardo da Vinci with ARTELA's lightning-fast innovation and a fountain of ideas! 💡",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Which Renaissance masterpiece can Artela be compared to?",
            "btn": [
                {
                    "txt": "Artela, the Mona Lisa of innovation, capturing hearts and minds across the ages!",
                    "msg": "Artela, the Mona Lisa of innovation, capturing hearts and minds across the ages!",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "Artela, standing tall like Michelangelo’s David, a beacon of creativity and strength!",
                    "msg": "Artela, standing tall like Michelangelo’s David, a beacon of creativity and strength!",
                    "postCtxFunc": "subContext",
                    "nextContex": ""
                }
            ]
        },
        {
            "speaker": "aivinci",
            "message": "Would you go back to the Renaissance with encrypted memories or bring Renaissance concepts to the encryption era?",
            "btn": [
                {
                    "txt": "Why not don the cloak of the Renaissance, armed with future wisdom to paint the town red with innovation?",
                    "msg": "Why not don the cloak of the Renaissance, armed with future wisdom to paint the town red with innovation?",
                    "postCtxFunc": "addContext",
                    "nextContex": ""
                },
                {
                    "txt": "It's time to dust off those Renaissance concepts and give encryption a makeover fit for kings and queens! 👑",
                    "msg": "It's time to dust off those Renaissance concepts and give encryption a makeover fit for kings and queens! 👑",
                    "postCtxFunc": "subContext",
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
    quizContext.root_context[4].btn[0].nextContex = "quizBank_0";

    // 4. 修正最后一个 quizBank_2 的 btn 指向 quizBank_3
    quizContext['quizBank_2'][0].btn.forEach(btn => {
        btn.nextContex = "@func@completeAivinciQuizeTask";
    });

    res.status(200).json(quizContext);
}