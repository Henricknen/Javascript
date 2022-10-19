function* cores() {     /* o '*' indica que estou ultilizando 'funções geradoras' */
    yield 'Azul'
    yield 'Vermelho'        /* 'yield' faz a função retornar o conteudo */
    yield 'Verde'
}

const itc = cores()       /* primeira chamanda função 'cores()' */
console.log(itc.next().value)     /* segunda chamda da função ultilizando 'next' que executara a proxima execução da função */
console.log(itc.next().value)           /* encontrando um 'yield' a chamada parará e retornará o valor */
console.log(itc.next().value)     