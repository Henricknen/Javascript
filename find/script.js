const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")     // selecionando elementos de determidos 'id' de dentro das aspas
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["html","css","javascript"]   // motagem de array
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
    const ret=elementos_array.find((e,i)=>{     // 'find' retorna o valor do primeiro elemeto no array a cada interação do array e esta função será executada até encontrar 'true'
        if(e.toUpperCase()===txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Valor encontrado " + e + " na posição " + i
            return e
        }
    })
    console.log(ret)
})
