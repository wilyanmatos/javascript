min - 23:50
var agora = new Date()
var AtualSem = agora.getDay()
console.log(AtualSem)
/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sabado
*/
switch(AtualSem){

case 3:
    console.log("Quinta")
    break
default:
    console.log('Invalido')

}