//38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

import { question } from "readline-sync"
//Entrada
const num1 = Number(question("Digite o primeiro numerador: "))
const den1 = Number(question("Digite o primeiro denominador: "))
const num2 = Number(question("Digite o segundo numerador: "))
const den2 = Number(question("Digite o segundo denominador: "))

//Processamento
let numSoma = num1 * den2 + num2 * den1;
let denSoma = den1 * den2;
let mdc = function(a, b) {
    return b == 0 ? a : mdc(b, a % b);
}
let divisao = mdc(numSoma, denSoma);
numSoma /= divisao;
denSoma /= divisao;;

//Saída
console.log(`A soma das frações é igual a ${numSoma}/${denSoma}`)