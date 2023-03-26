//4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual
//ou diferentedo algarismo da unidade.

import { question } from "readline-sync";

//Entrada
var num = Number(question('Digite um numero de dois digitos: '))

//processamento
var dezena = Math.floor(num / 10)
var unidade = Math.floor(num % 10)

//saida
if (dezena == unidade) {
    console.log('A dezena e a unidade são iguais')
}
else {
    console.log('A dezena e a unidade são diferentes')
}