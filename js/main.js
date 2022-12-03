//////let string = "123"
////console.log(Number(string))
////let number = 321
////console.log(String(number))
//
//let word = "palavra"
//console.log(word.length)
//
//let number = 1234
//console.log(String(number).length)

//transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
//let number = 345.33452345
//console.log(number.toFixed(2))
//let number = 345.33452345
//console.log(number.toFixed(2))

//    let word = "prrograming its good"
//    console.log(word.toUpperCase())

//let phrase = "i am a programing"
//let myArray = phrase.split(" ")
//console.log(myArray)
//let phrase = "I wanna become a better dev!"
//console.log(phrase.includes("dev"))

//Array com construtor

//let myArray = new Array('a','b','c')
//console.log(myArray) 

//let myArray = new Array(10)
//console.log(myArray) 

//console.log(["a",
//{type:"array"}, 
//function(){return "alo"}][2]())

//let word = "manipulação"
//console.log(Array.from(word))

//let techs = ["html", "css", "js"]
//
////adiciornar no final
//techs.push("nodejs")
//
////adicionar no começo
//techs.unshift("sql")
//
////remover do fim
//techs.pop()
//
////remover do começo
//techs.shift()
//
//console.log(techs)

//let myArray = new Array('a','b','c')
//console.log(myArray) 

//let myArray = new Array(10)
//console.log(myArray)

let family = {
income: [2500, 349 , 345],
expense: [1450, 657 , 89]

}

function mySaldo(array){
    
    if(income>expense){
        console.log("saldo positivo")}
    else if(income<expense){
        console.log("saldo negativo")}
    else {
        console.log("its ok")
    }
    console.log("saldo final:"+ income-expense +"$")


}

mySaldo()
