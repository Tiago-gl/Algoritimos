//3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

import { question } from "readline-sync";

//Entrada
const numero1 = parseInt(question("Digite o primeiro número:"));
const numero2 = parseInt(question("Digite o segundo número:"));

//Processamento
function mdc(a, b) {
    return b === 0 ? a : mdc(b, a % b);
}

const resultado = mdc(numero1, numero2)

//Saida
console.log(`O MDC entre ${numero1} e ${numero2} é ${resultado}.`);