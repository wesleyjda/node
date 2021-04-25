//Funcao de soma
/* FUNCAO DE SOMA
const sum = function(number1, number2){
    let total = number1 + number2
    return total;
}

let number1 = 22
let number2 = 35

console.log(`O número 1 é: ${number1}`)
console.log(`O número 2 é: ${number2}`)
console.log(`A soma de 1+2 é: ${sum(number1, number2)}`)
console.log(total)
*/

//Funcao e um liquidificador
/* 
function fazerSuco(fruta1, fruta2){
    return 'Suco de ' + fruta1 + ' e ' +fruta2
}

const copo = fazerSuco('Banana', 'Maçã')
console.log(copo)
*/


//Function scope
/*
let subject 

function createThink() {
    subject = "Study"
}

console.log(subject)
createThink()
console.log(subject)
*/

// Function Hoisting
// Funcao de dizer o nome
/*
sayMyName()

function sayMyName() {
    console.log("Wesley")
}
*/

// Arrow function
/*
const sayMyName = (name) => {
    console.log(name)
}

sayMyName("Wesley")
*/

// callback function
/*
function sayMyName(name) {
    console.log("Antes de executar a função callback")

    name()
    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)
*/

/* Function () constructor
    * Expressão new
    * Criar um novo objeto
    * this keyword
*/
/*
let date = new Date("2021-04-23")
console.log(date)
*/
/*
function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }    
}

const wesley = new Person("Wesley")
const nayara = new Person("Nayara")
console.log(wesley.walk())
console.log(nayara.walk())
*/


