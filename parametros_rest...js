function soma(...valores) {     /* ultilizando spread '...' que transforma '...valores' em parâmetro 'rest' */
    let res = 0
    for (let v of valores ) {       /* criando a variável 'v' que recebe os valoes do array 'valores' */
        res += v     /* 'res' recebendo ele proprio e somando com o valores da variável 'v' */
    }
    return res
}

console.log(soma(10, 5, 20))        /* fazendo a chamada da função 'soma' e passando varios valores */