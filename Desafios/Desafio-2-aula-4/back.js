
function btn(){
    var nasc = window.document.getElementById("nascimento").value
    var sexo = document.querySelector("input[name='sexo']:checked").value
    var idade = Number(2022 - nasc)
    var div_msg = document.getElementsByClassName("div_img")
    var img = document.getElementById("img")
    var msg = document.getElementById("msg")
    img.innerHTML = style="opacity:1;"
    div_msg.innerHTML = style="opacity:1;"
    if (idade >= 0 && idade < 6){
        img.src = "Photos/Homens/bb_knife.jpg"
    }else if(idade >= 6 && idade < 15){
        img.src = "Photos/Homens/Menino.jpg"
    }else{
        window.alert("ERRO")
    }
    msg.innerText = `Detectamos um(a) ${sexo} de ${idade} anos`
    
}
