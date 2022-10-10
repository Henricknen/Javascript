let colocacao = 1

switch(colocacao) {
    case 1:
        console.log("Primeiro Lugar")
        break

    case 2:
        console.log("Segundo Lugar")
        break

    case 3:
        console.log("Terçeiro Lugar")
        break

    case 4: case 5: case 6:
        console.log("Ganhou premio de partiçipação ")
        break

    default:        /* padrão */
        console.log("Não subiu oa Podio")
        break
}