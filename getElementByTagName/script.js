const dc1 = document.getElementById("c1")       // obtendo um elemento pelo seu id 'c1'
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]         // criando um 'array' manual


// const colecaoHTML = document.getElementsByTagName("div")      // coleção automatica retorna os elementos espeçificos das("") de 'getElementsByClassName'

// const colecaoHTML = [...document.getElementsByTagName("div")]       // array de elementos ultilizando 'const' qu ao longo do programa será inalterável

let colecaoHTML = document.getElementsByTagName("div")      // variável
colecaoHTML = [...colecaoHTML]      // ultilizando ...'spred' para espalha os elementos e transformar a variável em array

console.log(colecaoHTML)


