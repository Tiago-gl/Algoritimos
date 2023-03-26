//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro número: '))
const num2 = Number(question('Digite o segundo número: '))
const num3 = Number(question('Digite o terceiro número:'))

//processamento e saida
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é maior que ${num2} e ${num3}`)
}
else if (num1 < num2 && num2 > num3) {
    console.log(`${num2} é maior que ${num1} e ${num3}`)
}
else if (num1 < num3 && num3 > num2) {
    console.log(`${num3} é maior que ${num1} e ${num2}`)
}
else {
    console.log(`Os numeros são iguais`)
}