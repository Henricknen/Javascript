class CarroPadrao {     // a class 'CarroPadrao' é uma classe abstrata para todos os carros
    constructor() {
        if(this.constructor === CarroPadrao) {       // transdormando classe 'CarroPadrao' em classe abstrata
            throw new TypeError("Esta classe não pode ser instanciada...")
        }

        if(this.ligar === undefined) {        // obrigando implementar método 'ligar'
            throw new TypeError("Esta classe não pode ser instanciada...")
        }
        
        if(this.desligar === undefined) {        // obrigando implementar método 'desligar'
            throw new TypeError("Esta classe não pode ser instanciada...")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao{       // toda classe vai herda a classe 'CarroPadrao'
    constructor(tipo, estagioTurbo) {       // construtor
        super()     // como a class 'Carro' está estendo a class 'CarroPadrao' é necessario chamar o 'super()'
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1) {      
            this.velMax = 120       // criando a potencia
            this.nome = "Normal"        // nome do carro de acordo com seu tipo
        } else if(tipo == 2) {
            this.velMax = 160
            this.nome = "Esportivo"
        } else if(tipo == 3) {
            this.velMax = 200 
            this.nome = "Classico"
        }
        this.velMax += this.turbo.pot
    }

    info() {        // está função irá gerar as informações do carro
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
            console.log(this.portas)
            console.log(this.ligado)
        console.log("--------------------")
    }

    ligar() {   // implementação do método 'ligar'
        this.ligado = true
    }

    desligar() {   // implementação do método 'desligar'
        this.ligado = false
    }
}

class Turbo {
    constructor(e) {
        if(e == 0) {
            this.pot = 0        // potencia do turbo
        } else if(e == 1) {
            this.pot = 50
        } else if(e == 2) {
            this.pot = 75
        } else if(e == 3) {
            this.pot = 100
        }
    }
}

class CarroProprio extends  Carro {     // criação de 'CarroProprio' que herda os dados de 'Carro'
    constructor(estagioTurbo) {
        super(4, estagioTurbo)      // 'super' tem ser chamado primeiro, definindo o tipo e o estagio do turbo
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot      // 'velMax' somado mais o 'turbo'
        this.nome = "Ferrari"           // definição do 'nome'
    }

    info() {        
        if(this.tipoInfo == 1) {
            super.info()        // 'super' tem a função de chamar o 'info()' da classe pai
        } else {        // sobrescreve o 'info()' anterior da classe pai isto é conceito de (Polimorfismo)
            console.log(`Nome...:${this.nome}`)
            console.log(`Vel.Max:${this.velMax}`)
            console.log(`Turbo..:${this.turbo.pot}`)        // ultilizando 'template string' `${}`
            console.log("--------------------")
        }
    }
}


const c1 = new CarroProprio(3)      // não precisa passar o tipo que ele automaticamente será '3' e o etágio do 'turbo' será '3'
const c2 = new Carro(1, 1)
const c3 = new Carro(1, 0)      // criação de novo Carro com parâmetros de 'tipo' e 'turbo' 
// const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()