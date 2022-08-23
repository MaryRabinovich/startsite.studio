const app = document.getElementById('app')

const smallBubble = bubbleFactory.create('small')
const bigBubble = bubbleFactory.create('big')

pointerMoveEventsNotifier.attach(smallBubble)
pointerMoveEventsNotifier.attach(bigBubble)
pointerMoveEventsNotifier.start()

screenTicksNotifier.attach(smallBubble)
screenTicksNotifier.attach(bigBubble)
screenTicksNotifier.start()