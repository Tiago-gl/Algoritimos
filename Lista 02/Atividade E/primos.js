// 9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { question } from "readline-sync";

//Entrada

var num1 = question('Digite um número de 0 a 100: ')

//processamento
if (num1 > 100) {
    console.log('Digite um número entre 0 e 100 por favor.')
}
else{ 
    let divisores = 0;
    for (let i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        console.log(num1 + " é um número primo.");
    } else {
        console.log(num1 + " não é um número primo.");
    }
}
