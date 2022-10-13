let = n = 0
let max = 1000
let par = 0

for (let i = n; i < max; i++) {
    if(i % 2 != 0) {
        continue        /* enquanto o resto da divisão for diferente de 0 'continue' fara a interaçao continuar */
    }
    par++

}
console.log("Quantidade de numeros par: " + par)
console.log("Fim...")