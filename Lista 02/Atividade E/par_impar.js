//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { question } from "readline-sync";

//Entrada
var num1 = Number(question('Digite um numero inteiro: '))

//processamento
var numero = num1 % 2
if (numero == 1) {
    console.log('Numero impar')
}
else if (numero == 0) {
    console.log('Numero par')
}
else {
    console.log('Digite um valor valido')
}