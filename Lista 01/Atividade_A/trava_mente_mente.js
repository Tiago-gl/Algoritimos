//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import * as readsync from 'readline-sync'

//Entradas
const num1 = Number(readsync.question('Digite o primeiro número: '))
const num2 = Number(readsync.question('Digite o segundo número: '))

//Processamento
const soma = num1 + num2
const sub = num1 - num2

const divisao = soma / sub

//Saídas
console.log(`O resultado é: ${divisao}`)
