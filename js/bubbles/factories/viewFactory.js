const viewFactory = {

    create(bubbleType) {
    
        const view = document.createElement('div')
        app.appendChild(view)

        view.className = 'bubble'
        view.classList.add(
            config.bubbles[bubbleType].additionalClassName
        )
        
        view.moveTo = function (x, y) {
            view.style.setProperty('left', x + 'px')
            view.style.setProperty('top', y + 'px')
        }

        return view
    }
}