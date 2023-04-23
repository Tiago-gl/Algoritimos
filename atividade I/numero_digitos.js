//6. Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { question } from "readline-sync";

//Entrada
const numero = parseInt(question("Digite um número:"));

//processamento
const numString = numero.toString();
const numDigitos = numString.length;

//Saida
console.log(`O número ${numero} possui ${numDigitos} dígitos.`);
