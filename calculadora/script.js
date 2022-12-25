const btn_soma = document.querySelector("#btn_soma")
const btn_subtracao = document.querySelector("#btn_subtracao")      /* botões são elementos que ira interagir com 'dom' */
const btn_multiplicacao = document.querySelector("#btn_multiplicacao")
const btn_divisao = document.querySelector("#btn_divisao")
const res = document.querySelector("#res")

const op = [        // array 'op' com quatro operacões 'soma, subtração, multiplicação e divisão'
    ()=> {
        const val = [document.getElementById("valor1"). value, document.getElementById("valor2"). value]
        res.value = Number(val[0]) + Number(val[1])     // 'Number' é uma função de 'type cast' que ira converter uma string em um numero 
    },
    ()=> {
        const val = [document.getElementById("valor1"). value, document.getElementById("valor2"). value]
        res.value = Number(val[0]) - Number(val[1])
    },
    ()=> {
        const val = [document.getElementById("valor1"). value, document.getElementById("valor2"). value]
        res.value = Number(val[0]) * Number(val[1])
    },
    ()=> {
        const val = [document.getElementById("valor1"). value, document.getElementById("valor2"). value]
        res.value = Number(val[0]) / Number(val[1])
    }
]

btn_soma.addEventListener("click", op[0])       // chamando a função espeçifica de 'soma'
btn_subtracao.addEventListener("click", op[1])      // chamando a função espeçifica de 'subtração'
btn_multiplicacao.addEventListener("click", op[2])      // chamando a função espeçifica de 'multipllicação'
btn_divisao.addEventListener("click", op[3])                // chamando a função espeçifica de 'divisão'