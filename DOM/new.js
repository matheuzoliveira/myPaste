//Eventos
const input = document.querySelector('input')

input.onkeyup = function(event) {
    console.log('print')
    console.log(this.value)
    console.log(event)
}

const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print() {
    console.log('print')
}

const one = document.querySelector('h1.one')
one.addEventListener('click', print)

function print() {
    console.log('print')
}