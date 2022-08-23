const config = {
    bubbles: {
        screenTick: 20,
        small: {
            additionalClassName: 'bubble-small',
            contactingClass: 'bubble-small-contacting',
            elegance: 20,
        },
        big: {
            additionalClassName: 'bubble-big',
            contactingClass: 'bubble-big-contacting',
            elegance: 30,
        },
        startPosition: {
            x: 100,
            y: 100
        },
    },
    printer: {
        phrases: [
            'подробнее',
            'код и readme.md',
            'у меня',
            'на гитхабе',
            'MaryRabinovich',
            'проект startsite'
        ],
        ticksToWait: {
            printNextLetter: 3,
            pauseOnFull: 400,
            eraseOneLetter: 2,
            pauseOnEmpty: 100
        }
    }
}