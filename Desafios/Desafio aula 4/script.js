function carregar(){
    var nome = window.prompt("Olá, qual o seu nome?")
    var info_date = new Date()
    var min = info_date.getMinutes()
    var bg = window.document.getElementById("principal")
    var time = window.document.getElementById("time")
    var periodo = window.document.getElementById("img_periodo")
    var horas = info_date.getHours()
    var saudacao;

    //BOA MADRUGADA!!
    if(horas >= 0 && horas < 6){
        periodo.src = "imgs/Madrugada.jpg"
        bg.style.backgroundColor = '#07416B'
        saudacao = `Boa Madrugada, ${nome}`

    //BOM DIA!!
    }else if (horas >= 6 && horas < 12){
        periodo.src = "imgs/Manhã.png"
        bg.style.backgroundColor = "#ECA555"
        saudacao = `Bom Dia, ${nome}`

    //BOA TARDE!!
    }else if(horas >=12 && horas < 17){
        periodo.src = "imgs/tarde.jpg"
        bg.style.backgroundColor = "#E07714"
        saudacao = `Boa Tarde, ${nome}`

    //BOA NOITE!!
    }else if(horas >= 17 && horas < 22){
        periodo.src = "imgs/noite.jpg"
        bg.style.backgroundColor = "#0B004D"
        saudacao = `Boa Noite, ${nome}`
    }

    time.innerHTML = `<p> Agora são ${horas}:${min} Horas. <br>  ${saudacao}</p>`

}

