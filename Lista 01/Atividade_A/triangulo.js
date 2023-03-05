//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import * as readsync from 'readline-sync'

//entrada
const base = Number(readsync.question('Digite a base: '))
const altura = Number(readsync.question('Digite a altura: '))

//processamento
const area = base * altura / 2

//saída
console.log(`A área do triângulo é ${area.toFixed(2)}m²`)