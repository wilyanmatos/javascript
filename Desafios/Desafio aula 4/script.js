function carregar(){
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
        bg.style.background = "rgb(86, 86, 247)"
        saudacao = "Boa Madrugada!"

    //BOM DIA!!
    }else if (horas >= 6 && horas < 12){
        periodo.src = "imgs/Manhã.png"
        saudacao = "Bom Dia!"

    //BOA TARDE!!
    }else if(horas >=12 && horas < 17){
        periodo.src = "imgs/tarde.jpg"
        saudacao = "Boa Tarde!"

    //BOA NOITE!!
    }else if(horas >= 17 && horas < 22){
        periodo.src = "imgs/noite.jpg"
        saudacao = "Boa Noite!"
    }

    time.innerHTML = `<p> Agora são ${horas}:${min} Horas. <br>  ${saudacao}</p>`

}

