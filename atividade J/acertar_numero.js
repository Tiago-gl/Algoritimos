/*28. Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou. */

import { question } from "readline-sync";

//Entrada
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

//Processamento
let acertou = false;
while (!acertou) {
  let numero = parseInt(prompt("Digite um número entre 1 e 100:"));

  if (numero === numeroAleatorio) {
    acertou = true;
    tentativas++;
    //Saida
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
  } else {
    tentativas++;
    if (numero < numeroAleatorio) {
      console.log("Maior");
    } else {
      console.log("Menor");
    }
  }
}