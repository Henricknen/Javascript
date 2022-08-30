"use strict"        /* 'strict' cria a obrigação de delcarar a variável */

if(true) {
    var iniciais = "LHSF"   /* 'var' é o tipo mais comum de declaração */
    let nome = "Luis henrique silva ferreira"
}

console.log(nome)               /* o console.log não cosegue acessar a variável 'vome' pois ela está num escopo acima e foi atribida o tipo 'let' */

const codificacao = "javascript"    /* o valor de 'const' não pode ser alterado ao logo do programa */

codificacao = "c#"                      /* 'codificacao' não pode ser alterada pois é uma constante com valor 'javascript' */

console.log(codificacao)