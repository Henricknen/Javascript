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
    constructor() {
        this.tam = Math.floor(Math.random() * 15) + 10  // definido o tamanho da bolinha
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)        // sorteando propriedade de cores
        this.p = Math.floor(Math.random() * 255)
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam))     // local onde as 'bolinhas' irão nascer
        this.py = Math.floor(Math.random() * (alturaPalco - this.tam))          // local onde as 'bolinhas' irão nascer
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