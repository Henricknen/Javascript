const caixa1 = document.querySelector("#caixa1")     // obtendo os elemento de id 'caixa1'
const caixa2 = document.querySelector("#caixa2")
const btn_transferir = document.querySelector("#btn_transferir")
const todosrepositorios = [...document.querySelectorAll(".repositorio")]      // pegando todos os reepositorios que usam a classe 'repositorio' e dando um 'spread' e transformando em um array

todosrepositorios.map((el)=> {// 'map' adiçiona o evento de 'click' em todos 'repositorios'
    el.addEventListener("click", (evt)=> {      
        const repositorios = evt.target     // pegando todos elementos
        repositorios.classList.toggle("selecionado")     // 'toggle' verifica se o elemento tem a classe 'seleciondo' se tiver remove se não tiver adiçiona a classe
    })
})

btn_transferir.addEventListener("click", ()=> {        // quando botão for clicado os elementos que tem classe 'selecionado' seá adiçionado em 'caixa2'
    const repositoriosSelecionados = [...document.querySelectorAll(".selecionado")]
    const repositoriosNaoSelecionados = [...document.querySelectorAll(".repositorio:not(.selecionado)")]        // lista elementos da classe 'repositorio' que não 'not()' tem a classe 'selecionado'
    repositoriosSelecionados.map((el)=> {        // percorrendo o 'array' todo com 'map'
        caixa2.appendChild(el)        // 'appendChild' anexa o filho 'el' ao 'caixa2'
    })

    repositoriosNaoSelecionados.map((el)=> {        
        caixa1.appendChild(el)      // 'apendChild' retorna com elementos de 'repositoriosNaoSelecionados(el)' para 'caixa1'
    })
})