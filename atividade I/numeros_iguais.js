//7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import { question } from "readline-sync";

//Entrada
const numeroInicial = parseInt(question("Digite um número:"));
const numerosLidos = [numeroInicial]

//Processamento
let numeroLido;
do {
  numeroLido = parseInt(question("Digite outro número:"));
  numerosLidos.push(numeroLido);
} while (numeroLido !== numeroInicial);

//Saida
console.log("Números lidos:");
console.log(numerosLidos.join(", "));