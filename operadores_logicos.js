let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log((n1 > n2) && (n1 > n3))     /* ultilizando o oerador '&&' segui a tabela verdade que diz 'V' com 'F' e retornara 'false' */

console.log((n1 > n2) || (n1 > n3))         /* se as condições forem regidas pelo operador 'or' e a primeira ser verdadeira e a segunda falsa retornara 'true' */

console.log(!((n1 > n2) || (n1 > n3)))  /* o operador '!' not nega o retorna desra condição que passara a valer 'false' */

if((n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro")    /* se a operaçõ for 'true' é exibida esta menssagem */
} else {
    console.log("Falso")    /* se for 'false' esta que sera exibida */
}