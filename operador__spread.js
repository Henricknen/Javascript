const Profissinal = {nome: "Luis Henrique Silva Ferreira"}      /* criação do objeto 'Profissional' */
const Tecnico = {curso: "Técnico de informatica para internet"}
const Tecnico2 = {currso : "Eletroeletrônica"}
const graduacao = {cursoo: "Análise e desenvolvimento de sistemas"}
const perfil = {...Profissinal,...Tecnico,...Tecnico2,...graduacao}

console.log(perfil)