const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".repositorio")]

const c1_2 = document.querySelector('#c1_2')        // pegando 'div' de 'id' 'c1_2'
// console.log(c1_2)
console.log(c1_2.parentNode.parentNode)         // 'parentNode' re torna o pai 'elemento anterior'

// console.log(caixa1.hasChildNodes())       // método 'hasChildNodes' retorna 'true' se o elemento possui um filho
// console.log(btn_c[0].hasChildNodes())           // retornando o pimeiro '[0]' elemento dos btões
// console.log(btn_c[0].childNodes)       // 'childNodes' retorna um 'text'
// console.log(btn_c[0].children)      // 'children' retorna os elementos da coleção

// console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")      // condição ternaria

// console.log(caixa1.firstElementChild.innerHTML = "alterando primeiro elemnto")       // operando elemento 'firstElementChild' do 'caixa1'
// console.log(caixa1.children[1].innerHTML = "alterando 'filho' da lista")     // 'children' retorna uma lista com os filhos


// console.log(document.getRootNode())      // pegando o nó 'raiz' ultilizando método 'getRootNode''

// console.log(caixa1.firstElementChild)      // pegando o primeiro elemento de 'caixa1'
// console.log(caixa1.lastElementChild)            // pegando o ultimo elemento de 'caixa1'
// console.log(caixa1.children)        // pegando todos elementos ultilizando 'children'