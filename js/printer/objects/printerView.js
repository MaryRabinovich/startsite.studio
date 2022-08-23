const printerView = {
    
    view: document.getElementById('printer'),

    resetClasses() {
        const className = 'printer__phrase-'
        const classHoverName = 'printer__phrase-hover-'

        this.view.className = className +
            Math.ceil(4 * Math.random())
        this.view.classList.add(
            classHoverName + Math.ceil( 4 * Math.random() )
        )
    },

    show(phrase) {
        this.view.innerText = phrase
    }
}