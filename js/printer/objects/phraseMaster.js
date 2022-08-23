const phraseMaster = {

    phraseIndex: 0,
    letterIndex: 0,
    phrase: config.printer.phrases[0],
    handler: 'printNextLetter',
    ticks: 0,
    event: new Event('phrase-changed'),
    
    get() {
        return this.phrase.substring(0, this.letterIndex)
    },

    update() {
        if (this.mustWait()) return
        this[this.handler]()
    },

    printNextLetter: function () {
        this.letterIndex++
        if (this.letterIndex == this.phrase.length) {
            this.handler = 'pauseOnFull'
        }
    },

    pauseOnFull() {
        this.handler = 'eraseOneLetter'
    },

    eraseOneLetter() {
        this.letterIndex--
        if (this.letterIndex == 0) {
            this.changePhrase()
            this.handler = 'pauseOnEmpty'
        }
    },

    pauseOnEmpty() {
        this.handler = 'printNextLetter'
    },

    mustWait() {
        this.ticks++
        
        if (
            this.ticks <
            config.printer.ticksToWait[this.handler]
        ) return true

        this.ticks = 0
        return false
    },

    changePhrase() {
        this.phraseIndex++
        if (this.phraseIndex == config.printer.phrases.length) {
            this.phraseIndex = 0
        }
        
        this.phrase = config.printer.phrases[this.phraseIndex]
        
        app.dispatchEvent(this.event)
    }
}