const p_array=document.querySelector("#array")
const btnPesquisar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[05, 20, 17, 13, 15, 03, 9]   // motagem de array
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    const ret = elementos_array.some((e, i)=> {        // função anônima denttro de variável 'ret' com 'e' elemento que está sendo interado, 'i' posição e o array do elemento
        if(e < 18) {
            resultado.innerHTML="Array não conforme na posição " + i
        }
        return e >= 18      // condição  de equivalençia

    })
    if(ret) {
        resultado.innerHTML = "OK"      // se tudo estiver dentro do padrão será retornado 'OK'
    }
})
    
