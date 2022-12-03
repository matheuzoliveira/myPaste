//alterando estilos
const background = document.querySelector('body')

background.style.backgroundColor = "#282a36"

const title = document.querySelector('header')

title.style.color = "#50fa7b"
title.innerHTML = "<h1>Texto verde</h1>"

const subtitle = document.querySelector('h1.one')

subtitle.style.color = "#8be9fd"
subtitle.innerText = "Texto ciano"

const text = document.querySelector('p.one')

text.style.color = "#ff79c6"
text.innerHTML = "<h2>em construção...</h2>"

const input = document.querySelector('input')
input.style.backgroundColor = "#f1fa8c"
input.value = "clean"
