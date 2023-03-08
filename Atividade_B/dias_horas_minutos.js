/**
 * 30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
 */

import * as readsync from 'readline-sync'

//Entrada
let minutos = Number(readsync.questionInt('Digite um número de minutos: '))

//Processamento
let horas = parseInt(minutos / 60)

if(horas >= 24){
    var dias = parseInt(horas/24)
    minutos = minutos % 60
    horas = horas % 24
}
else{
    var dias = 0
    minutos = minutos % 60
}

//Saída
console.log(`${dias} dias ${horas} horas e ${minutos} minutos`)