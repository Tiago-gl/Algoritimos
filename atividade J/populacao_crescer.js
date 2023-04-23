/*18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B. */

import { question } from "readline-sync";

//Entrada
let populacaoA = 200000;
let populacaoB = 800000;
let anos = 0;

//Processamento
while (populacaoA <= populacaoB) {
  populacaoA *= 1.035; // taxa de crescimento de 3.5% ao ano
  populacaoB *= 1.0135; // taxa de crescimento de 1.35% ao ano
  anos++;
}

//Saida
console.log(`Serão necessários ${anos} anos para que a população da cidade A ultrapasse a população da cidade B.`);