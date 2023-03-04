//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import * as readsync from 'readline-sync'

//Entrada
const num = Number(readsync.question('Digite um número inteiro de 3 digitos: '))

//Processamento
const centena = parseInt(num/100)
const dezena = parseInt(num%100/10)
const unidade = parseInt(num%10)

//Saída
console.log(`O inverso do número ${num} é ${unidade}${dezena}${centena}`)