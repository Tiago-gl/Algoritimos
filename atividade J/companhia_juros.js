/*16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

import { question } from "readline-sync";

//Entrada
const emprestimo = 3000;
const pagamentoDiario = 200;
const juroDiario = 0.0085; // 0.85% ao dia

let saldo = emprestimo;
let diasUteis = 0;

//Processamento
while (saldo > 0) {
  saldo -= pagamentoDiario;
  saldo += saldo * juroDiario;
  diasUteis++;
  
  // Verifica se é fim de semana (sábado ou domingo) e não conta como dia útil
  const diaDaSemana = new Date().getDay();
  if (diaDaSemana === 6 || diaDaSemana === 0) {
    diasUteis--;
  }
}

//Saida
console.log(`Dias úteis necessários para quitar o empréstimo: ${diasUteis}`);