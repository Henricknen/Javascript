// const c1 = document.getElementById("c1")        // pegando elemento 'c1'
// const c1 = document.querySelector("#c1")         // pegando elemento 'c1' ultilizando 'querySelector'
const repositorios = [...document.querySelectorAll(".repositorio")]     // obtendo todos elementos que usam a classe 'repositorio' e  retornamdo um array

repositorios.map((el)=> {        // adiçionando o click em todos elementos
    el.addEventListener("click", (evt)=> {
        const el = evt.target     // 'target' mostra quem disparou o evento
        el.classList.add("destaque")        // adiçionando a classe 'destaque'
        console.log(el.innerHTML + " foi clicado")    
    })
})

// const msg=()=> {
//     alert("Clicou")
// }

// c1.addEventListener("click", (evt)=> {     // adiçionando 'evento' neste elemento com método 'addEventListener' que recebe o evento que será ultilizaado e o que será executado quando este evento occorrer
//     const el = evt.target     // 'target' mostra quem disparou o evento
//     el.classList.add("destaque")        // adiçionando a classe 'destaque'
// })