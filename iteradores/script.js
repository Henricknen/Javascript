const valores = [20, 13, 6, 8, 39, 17, 26]       // coleção de 'valores'
const it_valores = valores[Symbol.iterator]()        // 'iterador' do array 'valores'

const profissional = "Luis Henrique"
const it_profissional = valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())   // 'next()' indica o primeiro valor da posição do array
console.log(it_valores.next())
console.log(it_valores.next())      // com 'value' ao invés de se obter o 'objeto literal' se obtem o valor do array
console.log(it_valores.next())
console.log(it_valores.next().value)        // 'next()' retorna 'value' que idica a posição e 'done' que o término do array
console.log(it_valores.next().value)
console.log(it_valores.next().value)            // se 'done' for 'false' ou 'undefined' é que não chegou ao final do array
console.log(it_valores.next().value)
console.log(it_valores.next().value)                // se 'done' retorna 'true' se chegar ao final do array

console.log(profissional)
console.log(it_profissional.next())     // retornará a posição de cada 'string'
console.log(it_profissional.next())
console.log(it_profissional.next())
console.log(it_profissional.next())         // sempre retornará 'false' em quanto tiver 'string'
console.log(it_profissional.next())
console.log(it_profissional.next())
console.log(it_profissional.next())             // acabando as 'string' será retornado 'true'
console.log(it_profissional.next())
console.log(it_profissional.next())
console.log(it_profissional.next())
