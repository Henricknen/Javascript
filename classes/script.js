const f_tipoMilitar = document.querySelector("#f_tipoMilitar")       // pegando o id 'f_tipoMilitar' pelo id pra fazer a função de cheked
const f_tipoNormal = document.querySelector("#f_tipoNormal")            // pegando o id 'f_tipoNormal' pelo id pra fazer a função de cheked
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")

let a_carros = []

f_tipoMilitar.addEventListener("click", (evt)=> {       // quando 'militar' for clicado
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")         // o tributo 'disabled' de blindagem com id 'f_blindagem' será removido
    f_municao.removeAttribute("disabled")       // o tributo 'disabled' de municao com id 'f_municao' será removido
})

f_tipoNormal.addEventListener("click", (evt)=> {        // quando clicado em 'normal'
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")        // blindagem de id 'f_blindagem' será desabilitado
    f_municao.setAttribute("disabled", "disabled")      // municao de id 'f_municao' será desabilitado
})

const gerenciarExibicaoCarros =()=> {       // função 'gerenciarExibicaoCarros()'  
    carros.innerHTML = ""       // zerará o conteudo de 'carros'
    a_carros.forEach((c) => {
        const div = document.createElement("div")   //criará novo carro
        div.setAttribute("class", "carro")
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Cor: ${c.cor}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Municao: ${c.municao}<br/>`
        carros.appendChild(div)     // 'appendChild' mostrará todos carros que estão no array carros
    })
}

btn_addCarro.addEventListener("click", ()=> {       // diçionando evento de 'click' no button de id 'btn_addCarro'
    if(f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)    // adiçionando novo carro Normal
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)    // adiçionando novo carro Militar
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()       // evento que chamará a função 'gerenciarExibicaoCarros'
})

class Carro {       // Classe Pai/ Base
    constructor(nome, portas) {     // 'constructor' é o método que é chamado automaticamente quando a classe é instanciada
        this.nome = nome
        this.portas = portas     // propriedades
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function() {        // método para ligar
        this.ligado = true
    }
    
    desligar = function() {        // método para desligar
        this.ligado = false
    }

    setCor = function(cor) {        // método 'setCor' que define a cor do carro
        this.cor = cor
    }
}

class Militar extends Carro {       // 'extends' é uma definição de herança 'Classe Fiho'
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)     // 'super' invoca o construtor da classe Pai
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }

    atirar = function() {       // método
        if(this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Normal", 4)        // criando novo 'Carro'
c1.ligar()      // ligando o carro
c1.setCor("Preto")  // definido a cor como preta

const c2 = new Militar("meuCarro", 1, 100, 50)        // classe Filho
c2.atirar()
c2.atirar()
c2.atirar()     // dando tiros
c2.atirar()

console.log(`Nome: ${c1.nome}`)     // ultilizando template string '`${}`'
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`)     // ultilizando operação ternaria '?"Sim":"Não"'
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-----------------")

console.log(`Nome: ${c2.nome}`)     // ultilizando template string '`${}`'
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado?"Sim":"Não"}`)     // ultilizando operação ternaria '?"Sim":"Não"'
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Municao: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("-----------------")