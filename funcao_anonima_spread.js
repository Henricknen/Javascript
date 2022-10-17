let f = function(...valores) {      /* '...valores' transformado em parametro 'rest' */
    let res = 0
    for(v of valores) {     /* variável 'v' recebendo valoees do array 'valores' */
        res += v
    }

    return res
}

console.log(f(39, 65))