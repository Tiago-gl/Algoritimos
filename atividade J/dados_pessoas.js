/*Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva: */

import { question } from "readline-sync";

//Entrada
let somaIdadeMulheres = 0;
let somaIdadeHomens = 0;
let qtdeHomensSolteiros = 0;
let qtdeMulheresSolteiras = 0;
let qtdeMulheresDivorciadasAcimaDe30 = 0;

for (let i = 1; i <= 100; i++) {
  let sexo = parseInt(question("Digite o sexo da pessoa (1=Masculino, 2=Feminino)"));
  let idade = parseInt(question("Digite a idade da pessoa"));
  let estadoCivil = parseInt(question("Digite o estado civil da pessoa (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo)"));

  //Processamento
  if (sexo === 1) { 
    somaIdadeHomens += idade;
    if (estadoCivil === 2) { 
      qtdeHomensSolteiros++;
    }
  } else if (sexo === 2) {
    somaIdadeMulheres += idade;
    if (estadoCivil === 2) {
      qtdeMulheresSolteiras++;
    } else if (estadoCivil === 3 && idade > 30) {
      qtdeMulheresDivorciadasAcimaDe30++;
    }
  }
}

let mediaIdadeMulheres = somaIdadeMulheres / (100 - qtdeHomensSolteiros);
let mediaIdadeHomens = somaIdadeHomens / qtdeHomens;
let percHomensSolteiros = (qtdeHomensSolteiros / 100) * 100;
let percMulheresSolteiras = (qtdeMulheresSolteiras / (100 - qtdeHomensSolteiros)) * 100;

//Saida
console.log("Média de idade das mulheres: " + mediaIdadeMulheres.toFixed(2));
console.log("Média de idade dos homens: " + mediaIdadeHomens.toFixed(2));
console.log("Percentual de homens solteiros: " + percHomensSolteiros.toFixed(2) + "%");
console.log("Percentual de mulheres solteiras: " + percMulheresSolteiras.toFixed(2) + "%");
console.log("Quantidade de mulheres divorciadas acima de 30 anos: " + qtdeMulheresDivorciadasAcimaDe30);