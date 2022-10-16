function comprimento(...valores) {     /* ultilizando spread '...' que transforma '...valores' em parâmetro 'rest' */
    return valores.length           /* pegando o comprimento do array 'valores' */
}

console.log(comprimento(10, 5))        /* fazendo a chamada da função 'comprimento' e passando dois valores */