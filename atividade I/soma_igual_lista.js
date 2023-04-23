//8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
//quando a soma de dois números consecutivos da lista for igual a X.

import { question } from "readline-sync";

//Entrada
const X = parseInt(question("Digite um número X:"));

const numeroLidos = []

//Processamento
let numeroAnterior = 0;
let numeroAtual = 0;
do {
  numeroAnterior = numeroAtual;
  numeroAtual = parseInt(question("Digite outro número:"));
  numerosLidos.push(numeroAtual);
} while (numeroAnterior + numeroAtual !== X);

//Saida
console.log("Números lidos:");
console.log(numerosLidos.join(", "));