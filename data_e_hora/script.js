const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("alarme.mp3")        // apontando para o arquivo de 'audio'
som_alarme.loop = -1        // repetição do toque de alarme infinitamente '-1'

let td_atual = null     // variáveis
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", ()=> {
    td_atual = Date.now()
    ts_alarme = td_atual + (tmp_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)  
    hora_alarme.innerHTML = "Hora do Alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", ()=> {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0;

})

const data = new Date()     // constante 'data' instançiando um objeto data da classe Date

let dia = data.getDate()
dia = dia < 10 ? "0" + dia: dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes: mes


const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = data_r

const relogio=()=> {
    const data = new Date()     // data competa
    let hora = data.getHours()      // hora da data
    hora = hora < 10 ? "0" + hora: hora

    let minutos = data.getMinutes()      // minutos da data
    minutos = minutos < 10 ? "0" + minutos: minutos

    let segundos = data.getSeconds()      // segundos da data
    segundos = segundos < 10 ? "0" + segundos: segundos

    const hora_completa = hora +":" +minutos+ ":" +segundos
    div_relogio.innerHTML = hora_completa       // atualizando o valor da 'div_relogio'

    if(alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }

    
}

const intervalo = setInterval(relogio,1000)       // função 'setInterval' chama a função 'relogio' a cada 1 segundo

// getDate()   = Dia do mês
// getDay() = Dia da semana (número)
// getFullYear()    = Ano com 4 dígitos
// getHours()  = Horas
// getMilliseconds()   = Milisecondos
// getMinutes()    = Minutos
// getMonth()          = Mês
// getSeconds()            = Segundos
// getTime()   = Timestamp (milisegundo desde de 1 de janeiro de 1970, 00:00:00 UTC
// get.now()       = Timestamp (milisegundo desde de 1 de janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset()     = Timezone da localidade
// setDate()   = Define o dia do mês para data
// setMonth()      = Define um mês para data
// setFullYear()       = Define um ano para data
// setHours()      = Define horas
// setMinutes()        = Define minutos
// setSeconds()    = Define segundos
// setMiliseconds()    = Define mlisegundos
// setDateString() = Retorna somente a data
