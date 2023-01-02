class Npc {
    static alerta = false       // declaração do atributo 'static' para a classe
    constructor(energia) {
        this.energia = energia       // propriedade 'energia'
    }

    info = function() {     // função para fazer todos 'console'
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?"Sim" : "Não"}`)
        console.log("----------------------")
    }

    static alertar = function() {       // definição de método 'static'
        Npc.alerta = true      // mudando o alerta da classe 'Npc'
    }
}

const npc1 = new Npc(100)   // instanciando um novo Npc 'npc1'
const npc2 = new Npc(200)       // instanciando um novo Npc 'npc2'
const npc3 = new Npc(300)           // cada um tem sua propriedade energia individual

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()
