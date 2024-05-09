// pages/api/hello.js
export default function handler(req, res) {

    // 这个是校验tbook任务的接口
    // 这段对话，是一个固定的格式，奖励用户对应的水晶
    // 如果后台异常，也返回一个固定的对话，让用户重新开始
    let success = {
        root_context: [
            {
                "speaker": "aivinci",
                "message": "Verify pass!!Thanks for knocking out that daily task—you've earned yourself x crystals!",
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
                        "txt": "Verify again!",
                        "msg": "It's okay! try again",
                        "nextContex": "@post@/api/tbookTask?taskid=45285108495782"
                    },
                    {
                        "txt": "Confirm later",
                        "msg": "I will confirm it later",
                        "nextContex": "context_971_later"
                      }
                ]
            }
        ],
        "context_971_later": [
            {
              "speaker": "aivinci",
              "message": "Alright, if the task is successful, the crystals will be added automatically! If the task fails, I'll give you another shot!",
              "btn": [
                {
                  "txt": "Thanks!!",
                  "msg": "Thanks!!!",
                  "nextContex": "@func@pullContexts"
                }
              ]
            }
          ]
    }

    const contexts = [success, success, success, fail]

    // 返回任务完成后的对话，这里mock了，随机返回结果（4次有1次是提交失败）
    const randomIndex = Math.floor(Math.random() * 100) % contexts.length;

    res.status(200).json(contexts[randomIndex]);
}