//21. Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
//seja utilizado.

import { question } from "readline-sync";

//Entrada
let num1 = parseInt(question("Digite o primeiro número: "));
let num2 = parseInt(question("Digite o segundo número: "));
let resultado = 0;

//Processamento
if(num2 > 0) {
  for(let i = 1; i <= num2; i++) {
    resultado += num1;
  }
} else {
  for(let i = num2; i < 0; i++) {
    resultado -= num1;
  }
}

//Saida
console.log("O resultado da multiplicação é: " + resultado);