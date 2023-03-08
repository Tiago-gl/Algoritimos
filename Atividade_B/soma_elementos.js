//35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

import { question } from "readline-sync";

//Entrada
var numero = Number(question('Digite um número inteiro de quatro digitos: '))
var soma = 0 

//Processamento
const num1 = parseInt(numero / 1000)
const num2 = parseInt((numero / 100) %10)
const num3 = parseInt((numero % 100) /10)
const num4 = parseInt(numero % 10)
var soma = num1 + num2 + num3 + num4

//Saída
console.log(`A soma dos elementos é igual a ${soma}`)