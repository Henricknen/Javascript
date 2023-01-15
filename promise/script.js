const numero = document.getElementById("numero")        // pegando elemento que tem id 'numero'

let promise = new Promise((resolve, reject)=> {        // criação da promise (promessa)
    let resultado = true
    let tempo = 3000        // variáveis
    setTimeout(()=> {       // 'setTimeout' depois do tempo espeçificado na variável 'tempo' muda 'resultado' para true
        if(resultado) {
            resolve("Deu tudo certo...")
        } else {
            reject("Deu tudo errado...")
        }
    }, tempo)
})

promise.then((retorno)=>{        // se deu certo cai no 'then'
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
}) 
promise.catch((retorno)=> {        // se der errado cai no 'catch'
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})

numero.innerHTML = "processando..."