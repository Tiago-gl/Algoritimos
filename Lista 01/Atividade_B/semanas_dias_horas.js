/*28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
corresponde.*/

import * as readsync from 'readline-sync'

//Entrada
const horas = Number(readsync.question('Digite o valor de horas: '))

//Processamento

var dias = Math.floor(horas / 24)

if(dias >= 7){
    var semanas = Math.floor(dias / 7)
    dias = Math.floor(dias - (semanas * 7))
    var horasRest = horas % 24
}
else{
    dias = dias
    var semanas = Math.floor((dias / 7))
    var horasRest = horas % 24
}


//Saída
console.log(`${semanas} semanas ${dias} dias ${horasRest} horas`)