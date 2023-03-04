//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import * as readsync from 'readline-sync'

//Entrada
const num1 = Number(readsync.question('Digite o primeiro numero inteiro: '))
const num2 = Number(readsync.question('Digite o segundo numero inteiro: '))
const num3 = Number(readsync.question('Digite o terceiro numero inteiro: '))

//Processamento
const sum = (num1 + num2)
const diferenca = num2 - num3

//Saída
console.log(`A soma de ${num1} e ${num2} é igual a ${sum}`)
console.log(`A diferença entre ${num2} e ${num3} é igual a ${diferenca}`)