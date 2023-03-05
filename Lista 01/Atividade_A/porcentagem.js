//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

import * as readsync from 'readline-sync'

//Entrada
const valor = Number(readsync.question('Digite um valor em real (R$): '))

//Processamento
const valor1 = valor * 0.7

//Saída
console.log(valor1)