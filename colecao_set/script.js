const caixa = document.querySelector("#caixa")      // apontamento para o elemento 'caixa'

let musicas = new Set(["pagode", "eletrônica", "gospel"])     // iniçializando coleção 'Set' com elementos dentro

musicas.add("rap")      // adiçionando novo elemento na coleção
musicas.add("forró")
musicas.add("Româticas")
musicas.add("eletrônica")       // 'Set' não permite entradas duplicadas
musicas.add("pagode")       // 'Set' não permite entradas duplicadas

musicas.delete("forró")     // deletendo elemento
// musicas.clear()     // limpando toda coleção

console.log(musicas)

// musicas.forEach((el)=> {     // ultilizando método implementado na coleção 'Set', 'forEach' para percorre toda coleção
//     caixa.innerHTML += el + "<br/>"     // 'innerHTML += el' fazendo print dos elementos 'musicas' na tela
// })

for(let m of musicas) {     // 'for' é um método externo que percorre toda coleção 'Set'
    caixa.innerHTML += m + "<br/>"
}