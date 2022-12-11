const caixa1 = document.querySelector("#caixa1")        // pegando elemento 'caixa1' do 'dom'
const btn_c1 = document.querySelector("#c1")
const repositorio = [...document.querySelectorAll(".repositorio")]

caixa1.addEventListener("click", (evt)=> {     // adiçionando evento'addEventListener' de click com função anònima
    console.log("clicou")
})

repositorio.map ((el)=> {
    el.addEventListener("click", (evt)=> {
        evt.stopPropagation()
    })
})

