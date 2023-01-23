const palco = document.getElementById("palco")      /* pegando objetos pelo 'id'*/
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")


let larguraPalco = palco.offsetWidth        // variável 'larguraPalco'
let alturaPalco = palco.offsetHeight            // variável 'alturaPalco'
let bolas = []      // array onde será guardado os objetos instançiados
let numBola = 0

class Bola {        // classe 'Bola'
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10  // definido o tamanho da bolinha
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)        // sorteando propriedade de cores
        this.p = Math.floor(Math.random() * 255)
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam))     // local onde as 'bolinhas' irão nascer
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam))          // local onde as 'bolinhas' irão nascer
        this.velx = Math.floor(Math.random() * 2) + 0.5     // criando 'veloçidade' x
        this.vely = Math.floor(Math.random() * 2) + 0.5         // criando 'veloçidade' y
        this.dirx = Math.random() * 10 > 5 ? 1:-1
        this.diry = Math.random() * 10 > 5 ? 1:-1       // direção
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000)
        this.desenhar()     // chamando a função 'desenhar'
        this.controle = setInterval(this.controlar, 10)     // 'setInterval' chama a função controlar a cada 10 segundos
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola     // preechendo 'num_objetos' o valor da variável 'numBola'
    }

    minhaPos=()=> {     // métodos
        return this.arrayBolas.indexOf(this)        // retorna a posição de 'this'dentro do container Bola
    }
    remover=()=> {
        clearInterval(this.controle)        // para a bolinha na tela
        bolas = bolas.filter((b)=> {
            if(b. id != this.id) {
                return b
            }
        })
        this.eu.remove()        // removendoo do 'DOM'
        numBola--       // atualizando o array com o número de bolas
        num_objetos.innerHTML = numBola     // atualizando o 'display'

    }

    desenhar=()=> {
        const div = document.createElement("div")       // crianção da div 'bolinha'
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left: ${this.px}; top: ${this.py}; width: ${this.tam}; height: ${this.tam}; background-color: rgb(${this.r}, ${this.g}, ${this.b}`)      // adiçionado 'style' de todas propriedades definas como variáveis
        this.palco.appendChild(div)        // adiçionando no 'DOM'
    }

    controlar=()=> {

    }
}

window.addEventListener("resize", (evt)=> {     // evento de redimensionamento da tela
    let larguraPalco = palco.offsetWidth        // variável 'larguraPalco'
    let alturaPalco = palco.offsetHeight            // variável 'alturaPalco'
})

btn_add.aaEventListener("click", (evt)=> {      // evento de adição
    const qtde = txt_qtde.value     // obtendo o valor das bolinhas de 'txt_qtde'
    for(let i = 0; i < qtde; i++) {
        // instançiar novas bolinhas
    }
})

// // btn_remover.aaEventListener("click", (evt)=> {      // remoção de adição
// //     bolas.map()=> {
// //         // remover a bolinhao
// //     }
// })