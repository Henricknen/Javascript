const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")	// botão de 'seleção' de curso
const btnRemoverCurso=document.getElementById("btnRemoverCurso")	// botão de 'remoção' de curso
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso=document.getElementById("nomeCurso")

let indice=0	// vatável 'indice' que vai dar a posição do elemento

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]	// obtendo todos elementos 'selecionados'
    cursosSelecionados.map((el)=>{		// 'map' percorre 'repositorioSelecionados'
        el.classList.remove("selecionado")		// e 'remove' todos os selicionados
    })
}

const criarNovoCurso=(curso)=>{		// função para criar novo repositorio
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{	// evento de 'click'
        tirarSelecao()		// logo depois do click entra a função 'tirarSelecao' que tira a seleção do elemento
        evt.target.classList.toggle("selecionado")	// quando clicado no elemento o 'toggle' chamara a classe 'selecionado'
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++		//atualizando a posição do 'indice'
})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{		// ultilizando evento de 'click'
    try{
        alert("Curso selecionado: " + cursoSelecionado().innerHTML)
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{	// ultilizando evento de 'click'
    const cs=cursoSelecionado()
    if(cs!=undefined){
        cs.remove()
    }else{
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }else{
            alert("Digite o nome do curso")
        }
    }catch(ex){
        alert("Selecione um curso")
    }
})
