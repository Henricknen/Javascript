const olhos = [...document.getElementsByClassName("olho")]       // pegando elementos que usam a classe 'olho'

let posx_mouse = 0      // variáveis de posição do mause
let posy_mouse = 0

window.addEventListener("mousemove", (evt)=> {      // pegando as codernadas do mause
    posx_mouse = evt.clientX    // capturando posição X do mause
    posy_mouse = evt.clientY        // capturando posição Y do mause

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180/Math.PI        // transformando em graus

    olhos.forEach((o)=> {
        o.style.transform = "rotate(" +rot+ "deg)"
    })
})

