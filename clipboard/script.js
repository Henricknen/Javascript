const teclasNum = [...document.querySelectorAll(".num")]        /* pegando todas as teclas que tem a classe 'num' */
const teclasOp = [...document.querySelectorAll(".op")]        /* pegando todas as teclas que tem a classe 'op' */
const teclasRes = document.querySelector(".res")
const teclasDisplay = document.querySelector(".display")
const ton= document.getElementById("ton")       // ultilizando 'getElementById' para pegar o id do 'html'
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const tcpy = document.getElementById("tcpy")        // pegando a tecla de id  'tcpy'
const teste = document.getElementById("teste")          // pegando a tecla de id  'teste'


let sinal = false
let decimal = false

teclasNum.forEach((el)=> {
    el.addEventListener("click", (evt)=> {      // adçionando o evento de 'click' para cada elemento
        sinal = false             
        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true
                if(display.innerHTML == "0") {
                    display.innerHTML = "0," 
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }                            
        } else {
            if(display.innerHTML == "0") {
                display.innerHTML = ""      // se 'display' for igual a zero será apagdo seu conteúdo
            }

            display.innerHTML += evt.target.innerHTML     /* quando teclas forem clicadas será adiçionada no display */
        }
    })
})

teclasOp.forEach((el)=> {
    el.addEventListener("click", (evt)=> {
        if(!sinal) {
            sinal = true    // toda vez que um operador for digitado a variável 'sinal' será true
            if(display.innerHTML == "0") {
                display.innerHTML = ""      // se 'display' for igual a zero será apagdo seu conteúdo
            }
            if(evt.target.innerHTML == "x") {
                display.innerHTML += "*"        // substituio o 'X' por '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }            
        }

    })
})

tlimpar.addEventListener("click", (evt)=> {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evt)=> {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
}
)
tcpy.addEventListener("click", (evt)=> {
    // navigator.clipboard.writeText(display.innerHTML)        // 'clipboard' é a área de transferência e 'writeText' copia
    teste.select()      // método 'select' seleçiona antes de copiar
    teste.setSelectionRange(0, 9999)        // para previnir poblemas em dispositivos Mobile se usa 'setSelectionRange'
    navigator.clipboard.writeText(teste.value)      // copiando e fazendo a transferência do conteúdo do input 'teste' 
    })

