const screenTicksNotifier = {
    
    observers: [],

    attach(observer) {
        this.observers.push(observer)
    },

    start() {
        const observers = this.observers

        setInterval(function () {
            observers.forEach(
                observer => observer.updateWithScreenTicks()
            )
        }, config.bubbles.screenTick)
    }
}