//criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText= "olá Devs!"

//append prepend
const body = document.querySelector('body')
//body.append(div) //add no final 
//body.prepend(div) //add no começo

const script = body.querySelector('script')
//body.insertBefore(div,script)
//body.insertBefore(div, header.nextSibling)