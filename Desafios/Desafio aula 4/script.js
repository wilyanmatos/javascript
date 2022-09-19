var info_date = new Date()
var horas = info_date.getHours()
var min = info_date.getMinutes()
var bg = document.getElementById("principal")
var time = document.getElementById("time")
time.innerHTML = `<p> Agora são ${horas}:${min} Horas</p>`

if(nome == "Wilson"){
    bg.style.background = "black"
}

