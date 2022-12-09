const caixa1 = document.querySelector("#caixa1")     // obtendo os elemento de id 'caixa1'
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosrepositorios = [...document.querySelectorAll(".repositorio")]      // pegando todos os reepositorios que usam a classe 'repositorio' e dando um 'spread' e transformando em um array

todosrepositorios.map((el)=> {// 'map' adiçiona o evento de 'click' em todos 'repositorios'
    el.addEventListener("click", (evt)=> {      
        const repositorios = evt.target     // pegando todos elementos
        repositorios.classList.toggle("selecionado")     // 'toggle' verifica se o elemento tem a classe 'seleciondo' se tiver remove se não tiver adiçiona a classe
    })
})

btn.addEventListener("click", ()=> {        // quando botão for clicado os elementos que tem classe 'selecionado' seá adiçionado em 'caixa2'
    const repositoriosselecionados = [...document.querySelectorAll(".selecionado")]
    repositoriosselecionados.map((el)=> {        // percorrendo o 'araay' todo com 'map'
        caixa2.appendChild(el)        // 'appendChild' anexa o filho 'el' ao 'caixa2'
    })
})