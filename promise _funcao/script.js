const numero = document.getElementById("numero")        // pegando elemento que tem id 'numero'
const btn_promessa = document.getElementById("btn_promessa")    // pegando elemento que tem id 'btn_promessa'

btn_promessa.addEventListener("click", (evt)=> {        // adiçionando o evento de 'click'
    numero.innerHTML = "Processando..."
    console.log(promessa())      // fazendo a chamada da função 'promessa' que retorna a 'promise' no 'console.log'
        // .then((retorno)=>{        // se depois do resultado da função é tomada a deçisão
        //     numero.innerHTML = retorno
        //     numero.classList.remove("erro")
        //     numero.classList.add("ok")
        // }) 

        // .catch((retorno)=> {        // 'then' e 'cath' fica diretamante assoçiado a promessa
        //     numero.innerHTML = retorno
        //     numero.classList.add("erro")
        //     numero.classList.remove("ok")
        // })
})

const promessa=()=> {       // função promessa
    let p = new Promise((resolve, reject)=> {        // criação da promise (promessa)
        let resultado = true
        let tempo = 3000        // variáveis
        setTimeout(()=> {       // 'setTimeout' depois do tempo espeçificado na variável 'tempo' muda 'resultado' para true
            if(resultado) {
                resolve("Deu tudo certo...")
                numero.innerHTML = "Deu tudo certo..."
                numero.classList.remove("erro")
                numero.classList.add("ok")
            } else {
                reject("Deu tudo errado...")
                numero.innerHTML = "Deu tudo errado..."
                numero.classList.add("erro")
                numero.classList.remove("ok")
            }
        }, tempo)
    })
    return p
    
    
}

numero.innerHTML = "Esperando"