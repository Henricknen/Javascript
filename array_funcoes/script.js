let  valores = [10, 20, 30, 40, 50]       // array 'valores'
const op = [
    (val)=> {     // array 'op' com função anônima com parâmetro 'val'
        let res = 0
        for(v of val) {     // operando o valor do parâmetro
            res += v    // fazendo a 'soma' dos elementos da coleção
        }
        return res
    },
    (val)=> {       // função para fazer a multiplicação
        let res = 1     // multiplicação não pode começar em 0
        for(v of val) {
            res *= v    // fazendo a 'multiplicação' dos elementos da coleção
        }
        return res
    },
    (val)=> {       // função para fazer a impressão dos elementos da coleção
        for(v of val) {
            console.log(v)
        }
    }
]

console.log(op[0](valores))      // fazendo a chamada das função com o parâmetro '()' 'valores' * [0] soma
console.log(op[1](valores))         // [1] multiplicação
op[2](valores)      // está chamada vai imprimir os eementos do 'array' e não é necessario usar o 'console.log' pois já está sendo usado na função