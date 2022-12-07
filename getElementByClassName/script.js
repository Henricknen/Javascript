const repositorios = [...document.getElementsByClassName("repositorio")]     // vai pegar todos elementos que usam a 'classe' repositorio e ultilizando ...'spread' para transformar em array
const repositoriosc1 = [...document.getElementsByClassName("c1")]
const repositoriosc2 = [...document.getElementsByClassName("c2")]       // pegando todos elementos que usam a classe 'c2'
const esterepositorio = document.getElementsByClassName("repositorio")[2]       // retornando do elemento da posição '2'

console.log(repositorios)

console.log(c1)
console.log(c2)
console.log(esterepositorio)

repositoriosc1.map((el)=> {
    el.classList.add("destaque")        // pegando elemento por elemento e adiçionando um classe 'destaque' a esses elementos
})