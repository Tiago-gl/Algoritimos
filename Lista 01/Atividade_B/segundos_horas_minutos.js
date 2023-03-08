/*27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
segundos ele corresponde.*/

import * as readsync from 'readline-sync'

//Entrada

let segundos = Number(readsync.question('Digite um número de segundos: '))

//Processamento
let hours = Math.floor(segundos / 3600)
let minutes = Math.floor((segundos % 3600) / 60)
let seconds = segundos % 60

//Saída
console.log(`${hours} horas, ${minutes} minutos e ${seconds} segundos`)