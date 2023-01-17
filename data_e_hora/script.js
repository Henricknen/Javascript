const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")

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
