//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import * as readsync from 'readline-sync'

//Entrada
var metros = Number(readsync.question('Digite um valor inteiro de metros: '))

//Processamento
const km = parseInt(metros / 1000)
var metros = metros % 1000

//Saída
console.log(`A quantidade correspondente é: ${km} km e ${metros} m`)