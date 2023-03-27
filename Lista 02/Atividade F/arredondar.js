/*21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte 
fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente 
superior, caso contrario, é arredondado para o inteiro imediatamente inferior. */

import { question } from "readline-sync";

//Entrada
const num = parseFloat(question("Digite um número fracionado: "));

//processamento
console.log("Por favor, digite um valor numérico válido!");

const inteiro = parseInt(num);
const frac = num - integerPart;

//Saida
if (frac >= 0.5) {
    console.log(`O número ${num} foi arredondado para ${inteiro + 1}`);
} else {
    console.log(`O número ${num} foi arredondado para ${inteiro}`);
}