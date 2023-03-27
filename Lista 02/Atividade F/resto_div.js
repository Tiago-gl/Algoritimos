/*17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira 
pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva 
se o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos 
valores lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, 
se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos. */

import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro numero inteiro: '))
const num2 = Number(question('Digite o segundo numero inteiro: '))

//Processamento
const resto = num1 % num2;
const soma = num1 + num2;
const mult = soma * num1;
const divisao = soma / num2;

//Saida
if (resto === 1) {
    console.log(`A soma dos números é ${soma + resto}`);
} 
else if (resto === 2) {
    console.log(`${num1 % 2 === 0 ? 'Par' : 'Ímpar'} e ${num2 % 2 === 0 ? 'Par' : 'Ímpar'}`);
} 
else if (resto === 3) {
    console.log(`O resultado da multiplicação é ${mult}`);
} 
else if (resto === 4 && num2 !== 0) {
    console.log(`O resultado da divisão é ${divisao}`);
} 
else {
    console.log(`O quadrado do primeiro número é ${num1 ** 2} e o quadrado do segundo número é ${num2 ** 2}`);
}