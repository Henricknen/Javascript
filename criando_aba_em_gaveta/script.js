const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]        
const teclasRes = document.querySelector(".res")
const teclasDisplay = document.querySelector(".display")
const ton= document.getElementById("ton")       
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
const tcpy = document.getElementById("tcpy")        
const teste = document.getElementById("teste")          
const calc_aba = document.getElementById("calc_aba")        // adiçionando a aba no js pelo 'id'
const calc = document.getElementById("calc")        // pegando elementos de id 'calc'
const img_aba_calc = document.getElementById("img_aba_calc")        // pegando id 'img_aba_calc'


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
    // navigator.clipboard.writeText(display.innerHTML)
    teste.select()
    teste.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(teste.value)
    })

calc_aba.addEventListener("click", (evt)=> {
        calc.classList.toggle("calc_exibir")        // com 'toggle' se tiver a classe 'calc_exibir' ele retira se não tiver ele inseri
        if(calc.classList.contains("calc_exibir")) {
            img_aba_calc.setAttribute("src", "seta_esquerda.svg")
        } else {
            img_aba_calc.setAttribute("src", "seta_direita.svg")
        }
    })

