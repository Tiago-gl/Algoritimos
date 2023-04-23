//23. Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
//escreva os N termos da PG. Ler o valor de N.

import { question } from "readline-sync";

//Entrada
const razao = parseInt(question("Digite a razão da PG:"));
const primeiroTermo = parseInt(question("Digite o primeiro termo da PG:"));
const n = parseInt(question("Digite o número de termos da PG a serem escritos:"));

//Processamento e saida
console.log("Os", n, "primeiros termos da PG com razão", razao, "e primeiro termo", primeiroTermo, "são:");
let termoAtual = primeiroTermo;
for (let i = 0; i < n; i++) {
  console.log(termoAtual);
  termoAtual *= razao;
}