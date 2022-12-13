const filtroMaior18 =(valor)=> {
    if(valor >= 18)     // se idade que virá em valor
        return valor
}

const idades = [17, 23, 34, 76, 85, 63, 12, 37]     // 'array' de iDades
const maior = idades.filter((val, ind, arr)=> {       // ''array' recebendo a coleção da filtragem feita por 'filter'
    if(val >= 18)
    return val
})

const menor = idades.filter((val, ind, arr)=> {       // ''array' recebendo a coleção da filtragem feita por 'filter'
    if(val < 18)
    return val
})

console.log(idades)     // irá imprir o 'array' completo
console.log(maior)          // irá imprimir todos dados maior que 18
console.log(menor)              // irá imprimir todos dados menor que 18