//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro número: '))
const num2 = Number(question('Digite o segundo número: '))
const num3 = Number(question('Digite o terceiro número:'))

//processamento e saida
if (num1 == num2 && num3 == num1) {
    console.log(`Os três números são iguais`)
}
else if (num1 == num2) {
    console.log(`Existem dois números iguais`)
}
else if (num1 == num3) {
    console.log(`Existem dois números iguais`)
}
else if (num2 == num3) {
    console.log(`Existem dois números iguais`)
}
else {
    console.log(`Não tem numeros iguais`)
}