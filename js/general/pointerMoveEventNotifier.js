const pointerMoveEventsNotifier = {

    observers: [],

    attach(observer) {
        this.observers.push(observer)
    },

    notify(event) {
        this.observers.forEach(
            observer => observer.updateWithPointerMoveEvent(event)
        )
    },

    start() {
        const notifier = this

        onpointermove = function (event) {
            notifier.notify(event)
        }
    }
}