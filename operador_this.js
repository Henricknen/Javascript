function aluno(nome, nota) {
    this.nome = nome        // 'this.' faz a distinção da variavel 'nome' com o parametro de entrada 'nome'
    this.nota = nota

    this.dados_anonimo = function() {       // função anônima
        setTimeout(function() {     // 'setTimeout' gera um atraso na execução
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)        // '2000' é o tempo do 'setTimeout'
    }

    this.dados_arrow = function() {       // função anônima
        setTimeout(()=> {     // 'setTimeout' gera um atraso na execução
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)        // '2000' é o tempo do 'setTimeout'
    }
}

const al1 = new aluno("Luis henrique", 10)      // passando o valor da nota
al1.dados_anonimo()     // chamando a função 'tradiçional'
al1.dados_arrow()     // chamando a função 'arrow'