const Nave = function(energia) {        // clase 'Nave'
    this.energia = energia      // propriedade 'energia'
    this.disparos = 100     // propriedade 'disparos'
}

const n1 = new Nave(100)       // criação de novo objeto da classe 'nave'

Nave.prototype.vidas = 3       // adiçionando propriedade 'vidas' na classe 'Nave' ultilizando 'prototype' 

Nave.prototype.disparar = function() {      // método que fará os disparos
    if(this.disparos > 0) {
        this.disparos--
    }
}

n1.disparar()       // fazendo disparos
n1.disparar()       // fazendo disparos
n1.disparar()       // fazendo disparos

console.log(Nave)
console.log(n1)
console.log(n1.disparos)