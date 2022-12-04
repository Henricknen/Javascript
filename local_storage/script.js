// inserir dados
localStorage.setItem("name", "Luis Henrique S. F");      // 'setItem' salva um dado em 'localStorage'

// restart sem perde dados

// resgatar item
const name = localStorage.getItem("name");

console.log(name);

// regate de item que não existe
const lastName = localStorage.getItem("lastname");

console.log(lastName);      // por não haver nenhum item chamado 'lastName' valor será nulo

if(!lastName) {
    console.log("Sem sobrenome");
}

// removendo item
localStorage.removeItem("name");

// limpando todos itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

// console.log(typeof localStorage.getItem("a"));      // 'typeof' verifica o tipo do dado

// limpando dados
localStorage.clear();

// salvando em 'session storage'
sessionStorage.setItem("number", 123);

// reiniciar e perder dados
const n = sessionStorage.getItem("number");

console.log(n);

// removendo item
sessionStorage.removeItem("number");

sessionStorage.clear();

//  salvando objetos
const person = {
    name: "Luis Henrique",
    age: 31,
    job: "Programmer"
};

localStorage.setItem("person", JSON. stringify(person));       //objeto será convertido 'string'