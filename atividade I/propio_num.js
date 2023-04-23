/*1. Leia uma lista de números e que para cada número lido, escreva o próprio número e 
a relação de seus divisores. (flag número = 0).*/

import { question } from "readline-sync";

//Entrada
const numeros = question("Digite uma lista de números separados por espaço:").split(" ");

//Processamento
numeros.forEach(numero => {
    const divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
          divisores.push(i);
        }
      }
    
//Saida
console.log(`${numero}: ${divisores.join(", ")}`);

});