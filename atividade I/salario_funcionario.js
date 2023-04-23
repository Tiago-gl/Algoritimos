/*Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas.*/

import { question } from "readline-sync";

//Entrada
let salarioAtual, novoSalario, somaSalariosAtual = 0, somaSalariosReajustados = 0;

//Processamento
while (true) {
  salarioAtual = parseFloat(question("Informe o salário do funcionário (0 para encerrar):"));

  if (salarioAtual === 0) {
    break;
  }

  if (salarioAtual <= 2999.99) {
    novoSalario = salarioAtual * 1.25;
  } else if (salarioAtual <= 5999.99) {
    novoSalario = salarioAtual * 1.20;
  } else if (salarioAtual <= 9999.99) {
    novoSalario = salarioAtual * 1.15;
  } else {
    novoSalario = salarioAtual * 1.10;
  }

  somaSalariosAtual += salarioAtual;
  somaSalariosReajustados += novoSalario;

  console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)} / Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

//Saida
const diferencaSalarial = somaSalariosReajustados - somaSalariosAtual;

console.log(`\nSoma dos salários atuais: R$ ${somaSalariosAtual.toFixed(2)}`);
console.log(`Soma dos salários reajustados: R$ ${somaSalariosReajustados.toFixed(2)}`);
console.log(`Diferença entre as duas somas: R$ ${diferencaSalarial.toFixed(2)}`);