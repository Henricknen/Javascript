const pessoa = {        // objeto literal 'pessoa'
    nome: "Luis Henrique Silva Ferreira",
    graduacao: "Analise e desenvolvimento de sistesmas",
    tecnico: "Informatica para internet",
    tecnico: "Eletroeletrônica",
    especializacao: {
        curso1: "Lógica de programação",
        curso2: "Front End"
    }    
}

// console.log(pessoa)
// console.log(pessoa.nome)        // ultilizando parte espeçifica do objeto
// console.log(pessoa.especializacao.curso2)       // immprimindo 'curso' espeçifico

const string_pessoa = '{"nome":"Luis Henrique Silva Ferreira","graduacao":"Analise e desenvolvimento de sistesmas","tecnico":"Eletroeletrônica","especializacao":{"curso1":"Lógica de programação","curso2":"Front End"}}'

const s_json_pessoa = JSON.stringify(pessoa)     // método 'stringify' serve para converter o 'objeto literal' em uma string 'JSON'
const o_json_pessoa = JSON.parse(s_json_pessoa)       // 'parse' convete a string 's_json_pessoa' em um 'objeto JSON'

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)