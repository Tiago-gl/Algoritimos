//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import * as readsync from 'readline-sync'

//Entrada
let dias = Number(readsync.questionInt('Digite a quantidade de dias: '))

//Processamento
if(dias >= 7) {
    var semanas = parseInt(dias / 7)
    dias = dias % 7
}
else {
    semanas = 0
    dias = dias
}

//Saída
console.log(`${semanas} semanas e ${dias} dias`)    