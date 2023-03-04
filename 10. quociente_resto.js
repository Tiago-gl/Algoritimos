//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import * as readsync from 'readline-sync'

//Entrada
const num1 = Number(readsync.questionInt('Digite o primeiro número: '))
const num2 = Number(readsync.questionInt('Digite o segundo número: '))

//Processamento
const resto = num1 % num2
const quociente = num1 / num2

//Saída
console.log(`O quociente é ${quociente}`)
console.log(`O resto é ${resto}`)