const {EventEmitter} = require('events')
const ev = new EventEmitter()

// ev.on listen events
ev.on('saySomeThing', (message) => {
    console.log('I listen you:', message)
})

ev.once('saySomeThing', message => {
    console.log(message)
})

// ev.emit emit events
ev.emit('saySomeThing', 'Matheus the best dev of Word')
ev.emit('saySomeThing', 'I love my dog')

