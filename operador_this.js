function aluno(nome, nota) {
    this.nome = nome        // 'this.' faz a distinção da variavel 'nome' com o parametro de entrada 'nome'
    this.nota = nota

    console.log(nome)
    console.log(nota)
}

aluno("Luis henrique", 10)      // chamando a função 'aluno' e passando o valor da nota