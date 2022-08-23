const bubbleFactory = {
    
    create(bubbleType) {

        const view = viewFactory.create(bubbleType)

        const archive = archiveFactory.create(bubbleType)
        
        function updateWithPointerMoveEvent(event) {
            archive.save(event.clientX, event.clientY)
            view.moveTo(archive.getX(), archive.getY())
        }
        
        function updateWithScreenTicks() {
            archive.homogenize()
            view.moveTo(archive.getX(), archive.getY())
        }

        return {
            view,
            archive,
            updateWithPointerMoveEvent,
            updateWithScreenTicks
        }
    }
}