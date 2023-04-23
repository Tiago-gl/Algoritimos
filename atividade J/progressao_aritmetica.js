//24. Escreva um algoritmo que leia a razão de uma PA (Progressão Aritmética) e o seu primeiro termo e
//escreva os N termos da PA. Ler o valor de N.

import { question } from "readline-sync";

//Entrada
let razao = Number(question("Digite a razão da PA: "));
let primeiroTermo = Number(question("Digite o primeiro termo da PA: "));
let n = Number(question("Digite a quantidade de termos da PA: "));

console.log(`Termos da PA com razão ${razao} e primeiro termo ${primeiroTermo}:`);

//Processamento
for (let i = 0; i < n; i++) {
  let termoAtual = primeiroTermo + razao * i;
  console.log(termoAtual);
}
