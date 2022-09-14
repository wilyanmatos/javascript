var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas}:00 Horas`)
if(horas < 6){
    console.log("Boa Madrugada!")
}
else if(horas < 12 ){
    console.log("Bom dia!")
}else if(horas <= 17){
    console.log("Boa Tarde!")
}else{
    console.log("Boa Noite!")
}
