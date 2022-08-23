const bubbleFactory = {

    create(additionalClassName) {
    
        const view = document.createElement('div')
        app.appendChild(view)

        view.className = 'bubble'
        view.classList.add(additionalClassName)
        
        return view
    }
}