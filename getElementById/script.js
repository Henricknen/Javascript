const dc1 = document.getElementById("c1")       // obtendo um elemento pelo seu id 'c1'
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]         // criando um 'array'

// for(d of arrayElementos)
// d.innerHTML = "Alterando todos 'innerHTML'"

arrayElementos.map((e)=> {      // 'map' vai retorna cada um dos elementos do array
    console.log(e)
})

console.log(arrayElementos)

// console.log(dc1)    // imprimindo o elemento em si
// console.log(dc1.id)        // imprimindo o 'id' do elemento    
// console.log(dc1.innerHTML)      // imprimindo o 'innerHTML' do elemento
// dc1.innerHTML = "Ultilizando método´getEmelementById'"      // alterando o elemento