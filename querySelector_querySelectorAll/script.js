const toodosrepositorios = [...document.getElementsByTagName("div")]
const repositorios = [...document.getElementsByClassName("repositorio")]     // vai pegar todos elementos que usam a 'classe' repositorio e ultilizando ...'spread' para transformar em array
const repositoriosc1 = [...document.getElementsByClassName("c1")]
const repositoriosc2 = [...document.getElementsByClassName("c2")]       // pegando todos elementos que usam a classe 'c2'
const esterepositorio = document.getElementById("c1")

const query_divTodas = document.querySelector("div")        // 'querySelector' seleçiona apenas a primeira 'div'
console.log(query_divTodas)

const query_divTodas_ = [...document.querySelectorAll("div, p")]        // 'querySelectorAll' retorna uma coleção de todas as 'div' junto com as tags 'p'
console.log(query_divTodas_)

const query_repositorios = [...document.querySelectorAll(".repositorio")]       // vai retorna todos repositorios que tem a classe '.repositorio'
console.log(query_repositorios)

const query_repositoriosc1 = [...document.querySelectorAll(".c1")]      // é necessario ultilizar '.' no inicio do parâmetro 
console.log(query_repositoriosc1)

const query_repositoriosc2 = [...document.querySelectorAll(".c2")]
console.log(query_repositoriosc2)

const query_esterepositorio = document.querySelectorAll("#c1")[0]      // peguando todos elementos que tem o id# 'c1'
console.log(query_esterepositorio)

// console.log(toodosrepositorios)

// console.log(repositorios)
// console.log(c1)
// console.log(c2)
// console.log(esterepositorio)

// repositoriosc1.map((el)=> {
//     el.classList.add("destaque")        // pegando elemento por elemento e adiçionando um classe 'destaque' a esses elementos
// })