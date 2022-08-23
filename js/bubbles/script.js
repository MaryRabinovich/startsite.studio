const app = document.getElementById('app')

const bubbles = []

const smallBubble = bubbleFactory.create('small')
const bigBubble = bubbleFactory.create('big')

pointerMoveEventsNotifier.attach(smallBubble)
pointerMoveEventsNotifier.attach(bigBubble)

onmousemove = function (event) {
    pointerMoveEventsNotifier.notify(event)
}
