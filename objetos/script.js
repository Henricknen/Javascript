class Carro {      // classe chamada 'Pessoa' com métodos
    construtor(pnome) {      // passando parâmetro 'pnome' no contrutor
       this.nome = pnome      // 'this.nome' cria automaticamente a propriedade 'nome' e atribui o valor pessoa
       if(ptipo == 1) {
        this.tipo = "Esportivo"
        this.velmax = 300
       } else if(ptipo == 2) {
        this.tipo = "Ultilitario"
        this.velmax = 100
       } else if(ptipo == 3) {
        this.tipo = "Passeio"
        this.velmax = 160
       } else {
        this.tipo = "Militar"
        this.velmax = 180
       }
    }

    getNome() {     // método 'Nome' retornará o nome
        return this.nome
    }

    getTipo() {     // método 'Nome' retornará o tipo
        return this.tipo
    }

    getVelMax() {     // método 'Nome' retornará o vemax
        return this.vemax
    }

    getInfo() {     // retornando tudo em um 'array'
        return [this.nome, thhis.tipo, this.velmax]
    }
""
    info() {
        console.log(`Nome: ${this.nome}`)     // utilizando 'tempate string'
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V. max: ${this.velmax}`)
        console.log("--------------------------------")
    }
}

let c1 = new Carro("Rapido", 1)       // 'new' está instanciando novo objeto da classe 'Carro' e automaticamente executa o método construtor e o '()' faz referencia ao '()' do contrutor da classe
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Completo", 3)       // instançiando novos objetos todos daclasse 'Carro'
let c4 = new Carro("4x$", 4)

// c1.info()       // chamando o métoddo 'info'


// console.log(c1.nome)
// console.log(c2.tipo)
// console.log(c3.velmax)
// console.log(c4.nome)

console.log(c1.getInfo())       // chamando o método 'getInfo()'