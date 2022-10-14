function Par_Impar() {
    let n1 = 16
    let n2 = 3
    let res = n1 * n2
    if(res % 2)
        return "Par"        /* retonando "Par" */
    else
        return "Impar"          /* criando outro retorno "Impar" */
}

let res = Par_Impar()

console.log(res)