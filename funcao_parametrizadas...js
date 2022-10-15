function soma(n1 = 0, n2 = 0) {     /* os 'parâmetros' etão assumindo valores padrões */
    return(n1 + n2)        /* mesmo ter sido passado só um valor 'return' fará o calculo pois os parâmetros já tem valores 'padrões' */
}

console.log(soma(17))     /* 'console.log' assume o retorno da função */