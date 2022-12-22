const p_array=document.querySelector("#array")
const btnPesquisar=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1, 2, 3, 4, 5]   // motagem de array
let ant = []    // array 'anterior'
let atu = []        // array 'atual'    
let dobro = []          // array 'dobro'

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt)=> {
    dobro.push(elementos_array[0] * 2)       // pegando o dobro do primeiro elemento
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=> {       // 'reduce' recebe um parâmetro especial 'anterior'
        ant.push(anterior)      // 'push' adiçiona o valor do parâmetro 'anterior'
        atu.push(atual)             // 'push' adiçiona o valor do parâmetro 'atual'
        dobro.push(atual * 2)           // 'push' adiçiona o valor do parâmetro 'atual' multiplicado por 2
        return atual + anterior
    })
    resultado.innerHTML += "<br/>V. anterior: " + ant + "<br/>V. atual: " + atu + "<br/>Dobro: " + dobro
})
    
