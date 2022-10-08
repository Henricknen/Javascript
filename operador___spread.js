const soma = (v1, v2, v3) => {      /* função 'arrow function' de soma com tres valores */
    return v1 + v2 + v3     /* retornando a soma dos tres valores */
}

let valores = [3, 5, 8]     /* array com valores que serão somados na função */

console.log(soma(...valores))   /* ultilizando 'spread' para espalhar os valores do array que serão somados */