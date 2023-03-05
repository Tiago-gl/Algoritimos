//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import * as readsync from 'readline-sync'

//Entrada
const lado = Number(readsync.question('Digite o valor do lado do quadrado: '))

//Processamento
const area = lado * lado

//Saída
console.log(`A área do triângulo é ${area.toFixed(2)}m²`)