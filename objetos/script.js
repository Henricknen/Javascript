class Pessoa {      // classe chamada 'Pessoa' com métodos
    construtor(pnome) {      // passando parâmetro 'pnome' no contrutor
       this.nome = pnome      // 'this.nome' cria automaticamente a propriedade 'nome' e atribui o valor pessoa
    }
}

let p1 = new Pessoa("Luis")       // 'new' está instanciando novo objeto da classe 'Pessoa' e automaticamente executa o método construtor e o '()' faz referencia ao '()' do contrutor da classe
let p2 = new Pessoa("Henrique")
let p3 = new Pessoa("Silva")       // instançiando novos objetos todos daclasse 'Pessoa'
let p4 = new Pessoa("Ferreira")


console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
console.log(p4.nome)