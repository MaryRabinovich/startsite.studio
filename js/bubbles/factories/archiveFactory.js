const archiveFactory = {

    create(bubbleType) {

        const length = config.bubbles[bubbleType].elegance
       
        const x = new Array(length)
            .fill(config.bubbles.startPosition.x)
       
        const y = new Array(length)
            .fill(config.bubbles.startPosition.y)
        
        function save(xVal, yVal) {
            x.unshift(xVal)
            y.unshift(yVal)
            x.pop()
            y.pop()
        }

        function homogenize() {
            x.unshift(x[0])
            y.unshift(y[0])
            x.pop()
            y.pop()
        }

        function getX() {
            const sum = x.reduce((sum, a) => sum + a)
            return Math.floor( sum / x.length )
        }

        function getY() {
            const sum = y.reduce((sum, a) => sum + a)
            return Math.floor( sum / y.length )
        }

        return {
            x,
            y,
            save,
            homogenize,
            getX,
            getY
        }
    }
}