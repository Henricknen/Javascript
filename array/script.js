const caixa = document.querySelector("#caixa")      // adicionando o conteudo deste array na div de 'id' caixa

let framework = ["ANGULAR", "LARAVEL"]      // 'array', coleção de variáveis
let repositorios = ["HTML", "JAVASCRIPT", "C#", framework]      // incrementando array 'framework' no 'repositorios' 

repositorios[2] = "ARDUINO"   //  atribuindo novo valor a posição '2'

repositorios.push("REACT")      // 'push' adiciona um elemento ao final do array   
repositorios.push("SQL")
repositorios.pop()                  // 'pop' remove o ultimo elemento do array
// repositorios.pop()
repositorios.unshift("PHP")           // 'unshift' adiciona elementos no inicio
repositorios.unshift("LARAVEL")
repositorios.shift()           // 'shift' remove do inicio

console.log(repositorios[1])       // trabalhando elemento por elemento, chamando o array 'repositorios' e indicando o indice do elemento '[0]'
console.log(repositorios[4])            // vai apresentar todos elementos da poisição '4'

repositorios.map((el)=> {     // percorrendo o 'array' e operando os com 'map'
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})
console.log(repositorios)