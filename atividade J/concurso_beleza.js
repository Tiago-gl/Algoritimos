/*17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM'). */

import { question } from "readline-sync";

//Entrada
let nome, altura, peso;
let nomeMaisAlta, alturaMaisAlta = 0;
let nomeMaisBaixa, alturaMaisBaixa = Number.MAX_VALUE;
let nomeMaisMagra, pesoMaisMagra = Number.MAX_VALUE;
let nomeMaisGorda, pesoMaisGorda = 0;

//Processamento
do {
    nome = prompt("Digite o nome da candidata: ");
    if (nome !== "FIM") {
      altura = Number(question("Digite a altura da candidata (em cm): "));
      peso = Number(question("Digite o peso da candidata (em kg): "));

      if (altura > alturaMaisAlta) {
        nomeMaisAlta = nome;
        alturaMaisAlta = altura;
      }
      if (altura < alturaMaisBaixa) {
        nomeMaisBaixa = nome;
        alturaMaisBaixa = altura;
      }
      if (peso < pesoMaisMagra) {
        nomeMaisMagra = nome;
        pesoMaisMagra = peso;
      }
      if (peso > pesoMaisGorda) {
        nomeMaisGorda = nome;
        pesoMaisGorda = peso;
      }
    }
} 
while (nome !== "FIM");

//Saida
console.log(`A candidata mais alta é ${nomeMaisAlta} (altura: ${alturaMaisAlta}cm)`);
console.log(`A candidata mais baixa é ${nomeMaisBaixa} (altura: ${alturaMaisBaixa}cm)`);
console.log(`A candidata mais magra é ${nomeMaisMagra} (peso: ${pesoMaisMagra}kg)`);
console.log(`A candidata mais gorda é ${nomeMaisGorda} (peso: ${pesoMaisGorda}kg)`);