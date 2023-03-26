/*13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que 
todos os valores são diferentes. */

import { question } from "readline-sync";

//Entrada
var num1 = Number(question('Digite o primeiro numero: '))
var num2 = Number(question('Digite o segundo numero: '))
var num3 = Number(question('Digite o terceiro numero: '))
var num4 = Number(question('Digite o quarto numero: '))
var num5 = Number(question('Digite o quinto numero: '))

//Processamento
var maior = num1
var menor = num1

if (num2 > maior) {
    maior = num2;
} else if (num2 < menor) {
    menor = num2;
}

if (num3 > maior) {
    maior = num3;
} 
else if (num3 < menor) {
    menor = num3;
}

if (num4 > maior) {
    maior = num4;
} 
else if (num4 < menor) {
    menor = num4;
}
if (num5 > maior) {
    maior = num5;
} 
else if (num5 < menor) {
    menor = num5;
}
//Saida
console.log(`${maior} é o maior e ${menor} é o menor.`)