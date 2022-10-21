function* perguntas() {     /* o '*' indica que estou ultilizando 'funções geradoras' */
    const nome = yield 'Qual seu nome?'     /* 'yield'ponto de parada */
    const esporte = yield 'Qual é o seu esporte favorito?'
    return "Seu nome é: " + nome + "e seu esporte favorito é: " + esporte
}

const itp = perguntas()     /* interador */
console.log(itp.next().value)
console.log(itp.next("Luis henrique").value)
console.log(itp.next("Futebol").value)