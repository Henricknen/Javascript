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