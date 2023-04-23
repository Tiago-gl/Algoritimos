/*30. Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”). */

import { question } from "readline-sync";

//Entrada
let produto = '';
let preco = 0;
let quantidade = 0;

//Processamento
while (produto !== 'FIM') {
    produto = question('Digite o nome do produto: ');
    if (produto === 'FIM') {
      break;
    }
    preco = parseFloat(question('Digite o preço do produto: '));
    quantidade = parseInt(question('Digite a quantidade comprada: '));
  
    let valorTotal = preco * quantidade;
  
    if (quantidade > 10 && quantidade <= 20) {
      valorTotal = valorTotal * 0.9;
    } else if (quantidade > 20 && quantidade <= 50) {
      valorTotal = valorTotal * 0.8;
    } else if (quantidade > 50) {
      valorTotal = valorTotal * 0.75;
    }
//Saida
    console.log(`Produto: ${produto}`);
    console.log(`Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`);
}