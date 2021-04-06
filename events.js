const { EventEmitter } = require('events')

const emitter = new EventEmitter()

//emitter.on("Hello", (message) => console.log("opa " + message))
//emitter.once("Hello", (message) => console.log("opa " + message))

//emitter.emit("Hello", "Mandando msg")
//emitter.emit("Hello", "Mandando msg")
//emitter.emit("Hello", "Mandando msg")
//emitter.emit("Hello", "Mandando msg")

const { inherits } = require('util')

function Character(name){
  this.name = name
}


inherits(Character, EventEmitter)

const vitor = new Character("Vitor")

vitor.on('help', () => console.log("Eu te ajudo"))

console.log("Algm pode me ajudar")
vitor.emit('help')
