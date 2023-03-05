//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import * as readsync from 'readline-sync'

//Entrada
let base = readsync.question('Digite a base: ')
let altura = readsync.question('Digite a altura: ')

//Processamento
let area = base * altura 

//Saída
console.log(`A área do retangulo é ${area.toFixed(2)}m²`)