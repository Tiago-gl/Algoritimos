/*5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
chegar a 2.*/

import { question } from "readline-sync";

//Entrada
const x = question('Digite o valor de X: ')
const n = question('Digite o valor de N: ')

let divisor = n

//processamento

while (divisor >= 2) {
    const resultado = x / divisor
    console.log(`X / ${divisor} = ${resultado}`);
    x = resultado
    divisor--
}