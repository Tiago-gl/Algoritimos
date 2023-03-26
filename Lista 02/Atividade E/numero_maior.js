//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro número: '))
const num2 = Number(question('Digite o segundo número: '))

//processamento e saida
if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
}
else if (num1 < num2) {
    console.log(`${num2} é maior que ${num1}`)
}
else {
    console.log(`Os numeros são iguais`)
}