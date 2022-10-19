const somar = val => {      /* criando função 'somar' [fora] da função 'soma' */
    let res = 0
    for(v of val)       /* valores por ser um array ultilizo 'for of', que cada valor recebido vai para 'v'  */
    res += v        /* 'res' que inicialmente é 0 soma com valor de 'v' e assim sucessivamente */
    return res
    }

const soma =(...valores)=> {        /* 'arrow fuction' com parametro 'rest' */
    return somar(valores)       /* chamando a função 'somar' e passando para ela os 'valores' recebido da função 'soma' */
}

valor = [40, 35, 25]        /* criação do array 'valor' */
console.log(soma(...valor))       /* chamando a função 'soma' com parametro 'rest ...valor'  */