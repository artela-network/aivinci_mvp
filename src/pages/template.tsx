import React from 'react';

function JsonGridPage() {
  const jsonData = [
    {
      name: "Daily non task chat 1", value: {
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
    },
    {
      name: "Daily non task chat 2", value: {
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
    },
    {
      name: "Read post task", value: {
        "root_context": [
          {
            "speaker": "aivinci",
            "message": "Hey bro, chat with me and win 3 crystals!"
          },
          {
            "speaker": "aivinci",
            "message": "Do you know that Aspect on the Artela network can do many things that EVM can't?! "
          },
          {
            "speaker": "aivinci",
            "message": "Let me show you an example. "
          },
          {
            "speaker": "aivinci",
            "message": "Artela enables on-chain NPCs, allowing games to run fully automated on the blockchain! "
          },
          {
            "speaker": "aivinci",
            "message": "Read this blog and claim 3 crystals!",
            "btn": [
              {
                "txt": "Like it!",
                "msg": "Like it! Aspect is great!",
                "url": "https://twitter.com/Artela_Network/status/1752205516481396886",
                "nextContex": "@func@completeTask"
              },
              {
                "txt": "Not interested.",
                "msg": "Thanks for the response! We'll keep building Aspect, and hope you'll be interested next time!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ]
      }
    },
    {
      name: "Quiz task", value: {
        "root_context": [
          {
            "speaker": "aivinci",
            "message": "Hey bro, wanna hop in for a quiz and earn 3 crystals?",
            "btn": [
              {
                "txt": "Come on!",
                "msg": "Come on!",
                "nextContex": "context_quiz"
              },
              {
                "txt": "Not interested.",
                "msg": "No thanks!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ],
        "context_quiz": [
          {
            "speaker": "aivinci",
            "message": "Artela's a dual-vm blockchain, aside from EVM, what's the other virtual machine?",
            "btn": [
              {
                "txt": "WASM",
                "msg": "It's WASM",
                "nextContex": "context_right"
              },
              {
                "txt": "LLVM",
                "msg": "It's LLVM",
                "nextContex": "context_error"
              },
              {
                "txt": "MOVE",
                "msg": "It's MOVE",
                "nextContex": "context_error"
              }

            ]
          }
        ],
        "context_right": [
          {
            "speaker": "aivinci",
            "message": "Your are right! click to claim your crystals!!!",
            "btn": [
              {
                "txt": "Cliam!!",
                "msg": "Thanks!!!",
                "nextContex": "@func@completeTask"
              }
            ]
          }
        ],
        "context_error": [
          {
            "speaker": "aivinci",
            "message": "Oh, you got it wrong! Wanna try again?",
            "btn": [
              {
                "txt": "Try again",
                "msg": "Come on, try again",
                "nextContex": "context_quiz"
              },
              {
                "txt": "Reject this Task",
                "msg": "No thanks! I reject this task!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ]
      }
    },
    {
      name: "Tbook task(Such as follow/retweet X)", value: {
        "root_context": [
          {
            "speaker": "aivinci",
            "message": "New mission alert! Follow Artela founder on Twitter and earn yourself 3 crystals!",
            "btn": [
              {
                "txt": "Do it!",
                "msg": "Yes sir!",
                "url": "https://i.tbook.com/artela/45285108495782",
                "nextContex": "context_verify"
              },
              {
                "txt": "Reject this task.",
                "msg": "No thanks!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ],
        "context_verify": [
          {
            "speaker": "aivinci",
            "message": "Have you complete the task? Verify it!",
            "btn": [
              {
                "txt": "Verify!",
                "msg": "try verify",
                "nextContex": "@post@/api/tbookTask?taskid=45285108495782"
              },
              {
                "txt": "Confirm later",
                "msg": "I will confirm it later",
                "nextContex": "context_later"
              }
            ]
          }
        ],
        "context_later": [
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
    },
    {
      name: "UGC task", value: {
        "root_context": [
          {
            "speaker": "aivinci",
            "message": "Join our Twitter MEME contest now and win 3 crystals!"
          },
          {
            "speaker": "aivinci",
            "message": "Post a tweet with #EVMplusplus to comment on EVM++!",
            "btn": [
              {
                "txt": "Go to X!",
                "msg": "Like it!",
                "url": "https://twitter.com/intent/post?text=Hello+Twitter%21&url=https%3A%2F%2Fexample.com&hashtags=ExampleTag",
                "nextContex": "context_input"
              },
              {
                "txt": "Not interested.",
                "msg": "Thanks for the response! We'll keep building Aspect, and hope you'll be interested next time!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ],
        "context_input": [
          {
            "speaker": "aivinci",
            "message": "Enter your tweet below, click submit, and win crystals!",
            "btn": [
              {
                "txt": "submit",
                "msg": "here is my post!",
                "input": "example: https://twitter.com/NickDrakon/status/1788968280352346135",
                "nextContex": "@func@completeTaskWithInput"
              },
              {
                "txt": "give up",
                "msg": "Thanks for the response! We'll keep building Aspect, and hope you'll be interested next time!",
                "nextContex": "@func@rejectTask"
              }
            ]
          }
        ]
      }
    },
    { name: "Item 6", value: "TBD" }
  ];

  const handleCopy = (json) => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2))
      .then(() => alert('Copied to clipboard'))
      .catch(err => alert('Failed to copy text: ', err));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {jsonData.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <textarea value={JSON.stringify(item.value, null, 2)} readOnly style={{ width: '100%', minHeight: '400px' }} />
          <button onClick={() => handleCopy(item.value)} style={{ width: '100%' }}>
            Copy
          </button>
        </div>
      ))}
    </div>
  );
}

export default JsonGridPage;
