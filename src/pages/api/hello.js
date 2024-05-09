// pages/api/hello.js
export default function handler(req, res) {
    res.status(200).json({
        nextContext: [
            {
                "speaker": "aivinci",
                "message": "YOU ARE Ai Vinci's DoooooG",
                "btn": [
                    {
                        "txt": "Share to X!",
                        "msg": "Like it, will share to X."
                    },
                    {
                        "txt": "No thanks",
                        "msg": "No.. i reject this task!"
                    }
                ]
            }
        ]
    });
}