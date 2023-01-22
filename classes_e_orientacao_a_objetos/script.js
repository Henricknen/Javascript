const palco = document.getElementById("palco")      /* pegando objetos pelo 'id'*/
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")


let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = []