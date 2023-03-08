/*46. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima.*/

import { question } from "readline-sync"
//Entrada
let valor = parseFloat(question('Digite o valor da mercadoria: '))

//Processamento 
let entrada = Math.ceil(valor / 3)
let prestacao = Math.floor(valor / 3)
let total = entrada + 2 * prestacao

//Saída
console.log(`Valor da entrada: R$ ${entrada.toFixed(2)}`);
console.log(`Valor das prestações: R$ ${prestacao.toFixed(2)}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);