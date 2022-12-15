const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")      // botão de 'seleção' de curso
const btnRemoveCurso = document.getElementById("btnRemoveCurso")        // botão de 'remoção' de curso

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    
})

const radioSelecionado=()=> {
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]       // ultilizando 'spread' transformando em 'array' e pegando so os input do tipo 'radio'
    let radioSelecionado=todosRadios.filter((ele,ind,arr)=>{        // fazendo filtragem pegando todos 'radios' seleçionados
        return ele.checked      
    })
    return radioSelecionado[0]    
}

btnCursoSelecionado.addEventListener("click",(evt)=>{       // ultilizando evento de 'click'
    const rs = radioSelecionado()          // 'radioSlecionado' vai obter o conteudo da função 'cursoSelecionado'
    if(rs != undefined) {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    } else {
        alert("Seleçione um repositorio...")
    }
    
})
    
btnRemoverCurso.addEventListener("click",(evt)=>{       // ultilizando evento de 'click'
    const rs = radioSelecionado()          // 'radioSlecionado' vai obter o conteudo da função 'cursoSelecionado'
    if(rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode   // 'parentNode' vai devolver o que será removido
        cursoSelecionado.remove()      // chamando a função de remoção para remoção do elemento seleçionado
    } else {
        alert("Seleçione um repositorio...")
    }
    
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling