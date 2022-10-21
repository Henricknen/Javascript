function* contador() {
    let i = 0
    while(true) {       /* 'loop' infinito */
        yield i++
        if(i > 10)
            break           /* controle de parada */
    }
}

const itc = contador()      /* interador */
for(let c of itc) {     /* 'loop' infinito */
    console.log(c)
}
