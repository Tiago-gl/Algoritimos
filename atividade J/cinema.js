/*Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1). */

import { question } from "readline-sync";

//Entrada
let idade, opiniao, somaIdadeOtimo = 0, qtdRegular = 0, qtdEntrevistados = 0, qtdBom = 0;

//Processamento
while (true) {
  idade = parseInt(question("Informe a idade (ou -1 para sair):"));
  
  if (idade === -1) {
    break;
  }
  
  opiniao = parseInt(question("Informe a opinião (1=ótimo, 2=bom, 3=regular, 4=péssimo):"));
  
  if (opiniao === 1) {
    somaIdadeOtimo += idade;
  } else if (opiniao === 3) {
    qtdRegular++;
  } else if (opiniao === 2) {
    qtdBom++;
  }
  
  qtdEntrevistados++;
}

//Saida
if (qtdEntrevistados === 0) {
  console.log("Nenhum entrevistado registrado.");
} else {
  if (somaIdadeOtimo === 0) {
    console.log("Nenhum entrevistado respondeu ótimo.");
  } else {
    let mediaIdadeOtimo = somaIdadeOtimo / (qtdEntrevistados - qtdBom);
    console.log(`Média das idades dos que responderam ótimo: ${mediaIdadeOtimo.toFixed(2)}`);
  }
  
  console.log(`Quantidade de entrevistados que responderam regular: ${qtdRegular}`);
  
  if (qtdEntrevistados === qtdBom) {
    console.log("Todos os entrevistados responderam bom.");
  } else {
    let percBom = (qtdBom / qtdEntrevistados) * 100;
    console.log(`Percentual de entrevistados que responderam bom: ${percBom.toFixed(2)}%`);
  }
}