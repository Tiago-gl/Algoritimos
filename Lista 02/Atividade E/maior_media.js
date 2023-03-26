//14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são
//maiores que a média.

import { question } from "readline-sync";

//Entrada
var num1 = Number(question('Digite o primeiro numero: '))
var num2 = Number(question('Digite o segundo numero: '))
var num3 = Number(question('Digite o terceiro numero: '))
var num4 = Number(question('Digite o quarto numero: '))
var num5 = Number(question('Digite o quinto numero: '))

//Processamento
var media = (num1 + num2 + num3 + num4 + num5) / 5;
var maiorMedia = []

if (num1 > media) {
    maiorMedia.push(num1);
}
if (num2 > media) {
    maiorMedia.push(num2);
}
if (num3 > media) {
    maiorMedia.push(num3);
}
if (num4 > media) {
    maiorMedia.push(num4);
}
if (num5 > media) {
    maiorMedia.push(num5);
}

//Saida
console.log(`A media é igual a ${media} e ${maiorMedia} são maiores que a media.`)