const objs1 = document.getElementsByName("div")      /* retorna uma coleção de elementos html neste caso será as 'div' */
const objs2 = [...document.getElementsByName("div")]        /* ultlizando 'spread' */

console.log(objs1)
console.log(objs2)