/*Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. */

import { question } from "readline-sync";

//Entrada
let investimentoMensal, taxaJuros, saldo, continuar;

//Processamento
do {
  investimentoMensal = Number(question("Informe o valor do investimento mensal:"));
  taxaJuros = Number(question("Informe a taxa de juros mensal (%):")) / 100;
  saldo = 0;
  for (let i = 1; i <= 12; i++) {
    saldo = (saldo + investimentoMensal) * (1 + taxaJuros);
  }
  console.log(`Saldo do investimento após 1 ano: ${saldo.toFixed(2)}`);
  continuar = question("Deseja processar mais um ano (S/N)?").toUpperCase();
} while (continuar === "S");