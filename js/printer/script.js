smallBubble.addContactingBehaviour(printerView.view)
bigBubble.addContactingBehaviour(printerView.view)

printerView.resetClasses()

const printer = { printerView, phraseMaster }

printer.updateWithScreenTicks = function() {
    this.phraseMaster.update()
    this.printerView.show(this.phraseMaster.get())
}

app.addEventListener('phrase-changed', function (event) {
    printerView.resetClasses()
})

screenTicksNotifier.attach(printer)