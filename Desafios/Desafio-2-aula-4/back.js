
function btn(){
    var nasc = window.document.getElementById("nascimento").value
    var sexo = document.querySelector("input[name='sexo']:checked").value
    var date = new Date()
    var ano = date.getFullYear()
    var idade = Number(ano - nasc)
    var res = window.document.getElementById("img")
    var img = document.createElement("img")
    img.setAttribute("id" ,"foto")

    if(sexo == "homem"){
        window.alert("O cara é homi kkkkkkkk")
        if(idade >= 0 && idade < 5){
            //Bebe
            res.setAttribute('src', 'Photos/Homens/bb_knife.jpg')
        }else if(idade >= 5 && idade < 15){
            //menino
            res.setAttribute('src', 'Photos/Homens/Menino.jpg')

        }
    }
    
    if(sexo == "mulher"){
        window.alert("Muie kkkkkkkkkkk")
    }
    
    foto.appendChild(img)
}
