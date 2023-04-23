//4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 
// 1. Escreva o resultado da última divisão efetuada.

import { question } from "readline-sync";

const numero1 = question('Digite um valor desejado: ')

let resultado = numero

//processamento
while (resultado >= 1) {
    resultado = resultado / 2
}

//Saida
console.log(`A última divisão foi: ${resultado}.`);