function soma(...valores) {     /* ultilizando spread '...' que transforma '...valores' em parâmetro 'rest' */
    let tam = valores.length        /* criação da variável 'tam' que indica o tamanho do array */
    let res = 0
    for (let i = 0; i < tam; i++ ) {
        res += valores[i]       /* 'res' recebendo o proprio valor e somado com valores da posição 'i'*/
    }
    return res
}

console.log(soma(10, 5, 6, 3, 7))        /* fazendo a chamada da função 'soma' e passando varios valores */