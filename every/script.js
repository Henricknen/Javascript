const p_array=document.querySelector("#array")
const btnPesquisar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[25,  37, 38, 15, 18, 49]   // motagem de array
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    const ret = elementos_array.every((e, i)=> {        // função anônima denttro de variável 'ret' com 'e' elemento que está sendo interado, 'i' posição e o array do elemento
        if(e < 18) {
            resultado.innerHTML="Array não conforme na posição " + i
        }
        return e >= 18      // verificando se os elementos 'e' é igual ou maior que 18

    })
    if(ret) {
        resultado.innerHTML = "OK"      // se tudo estiver dentro do padrão será retornado 'OK'
    }
})
    
