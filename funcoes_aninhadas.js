const soma =(...valores)=> {        /* 'arrow fuction' com parametro 'rest' */
    const somar = val => {      /* criando função 'somar' dentro da função 'soma' */
    let res = 0
    for(v of val)       /* valores por ser um array ultilizo 'for of', que cada valor recebido vai para 'v'  */
    res += v        /* 'res' que inicialmente é 0 soma com valor de 'v' e assim sucessivamente */
    return res
    }
    return somar(valores)       /* chamando a função 'somar' e passando para ela os 'valores' recebido da função 'soma' */
}
console.log(soma(45, 15, 30))       /* chamando a função 'soma' e passando valores para o spread '...valores'  */