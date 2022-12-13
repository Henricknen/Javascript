const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".repositorio")]
const c1_2 = document.querySelector('#c1_2')        // pegando 'div' de 'id' 'c1_2'
const repositorios = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "Android"]

repositorios.map((el,chave)=> {        // adiçionando os repositorios 'dinâmicamente'
    console.log(chave)
    const novoElemento = document.createElement("div")  // criação de constante com método 'createElement' que dentro das "" espeçifica qual elemento será criado
    novoElemento.setAttribute("id", "c" + chave)                   // o método 'setAttribute' está inserindo o 'id' mais o seu valor (chave)
    novoElemento.setAttribute("class", "repositorio c1")        // inserindo classe com método 'setAttribute'
    novoElemento.innerHTML = el       // 'innerHTML' é o proprio 'el' elemento
    caixa1.appendChild(novoElemento)        // anexando 'novoElemento' dentro de 'caixai' com método 'appendChild'
})