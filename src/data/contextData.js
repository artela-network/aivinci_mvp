export const unLoginContext = [
    {
        "speaker": "aivinci",
        "message": "Welcome to Artela Renaissance!!"
    },
    {
        "speaker": "aivinci",
        "message": "Go ahead and connect your wallet—let's embark on this crypto renaissance journey together!",
        "btn": [
            {
                "txt": "Connect wallet",
                "msg": "Alrighty, here I come!",
                "nextContex": "@func@login"
            },
            {
                "txt": "Not now",
                "msg": "No now, thanks!",
                "nextContex": "rejectLoginContext"
            }
        ]
    }
];

export const rejectLoginContext = [
    {
        "speaker": "aivinci",
        "message": "Sure thing, you can connect your wallet anytime using the button in the top right corner!"
    }
];
