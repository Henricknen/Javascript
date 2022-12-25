const caixa = document.querySelector("#caixa")      // apontamento para o elemento 'caixa'

let mapa = new Map()        // 'new' declara está variável como uma coleção 'map'

mapa.set("repositorio", "javascript")        // 'set' adiçiona elementos dentro da coleção
mapa.set("Profissional", "Luis Henrique S F")       // cada elemento do 'map' possui um conjunto de 'chave' e 'valor'

// mapa.delete("repositorio")      // deletando elemento da chave "repositorio"

console.log(mapa)

let pes = "repositorio"
let res = ""
if(mapa.has(pes)) {       // verificando se 'chave' existe na coleção
    caixa.innerHTML = "A chave que está na coleção é " + mapa.get(pes)      // 'mapa.get(pes)' contém a chave
} else {
    caixa.innerHTML = "Não existe etá chave na coleção"
}

res += "<br/> O tamanho da coleção é " + mapa.size      // 'mapa.size' pega o tamanho
caixa.innerHTML = res

mapa.forEach((el)=> {       // percorrendo todos elementos da coleção
    console.log(el)
})

caixa.innerHTML = mapa.get("Profissional")     // adiçionado na 'caixa' de 'index.html' o valor da chave  'Profissional'