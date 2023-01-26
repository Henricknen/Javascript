const url = document.getElementById("url")      // capturando elemento 'url' pelo id
const btn_url =document.getElementById("btn_url")       // capturando elemento 'btn_url' pelo id

btn_url.addEventListener("click", (evt)=> {
    // window.location = "script.js"     // 'window.location' redireçiona para outra página ou uma url on line

    // window.location = "https://github.com/Henricknen/Javascript"        // 'window.location' redireçiona para outra página ou uma url on line

    // window.location.replace("https://github.com/Henricknen")       // 'replace' redireçiona para outra página e exclui a url atual do historico

    // window.location.reload()        // 'reload' recarrega a página

    // window.location.assign("https://github.com/Henricknen")     //  'assign' tem a mesma função do 'replace' mas não remove a página do historico podendo o usúario defazer a ação

    // window.history.back()       // 'history' navega pelo historico da página e a propriedade 'back' volta para página anterior

    // window.history.forward()    // 'forward' carrega a proxima página que está no historico
    window.location = url.value
})