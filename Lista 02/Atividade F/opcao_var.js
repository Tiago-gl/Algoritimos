/*18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da 
seguinte forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule 
e escreva o resultado dessa operação sobre os dois valores lidos.*/

import { question } from "readline-sync";

//Entrada
const opcao = Number(question('Escolha entre 1 - soma, 2 - subtracao, 3 - multiplicacao, 4 - divisao: '))
const num1 = Number(question('Digite o primeiro numero inteiro: '))
const num2 = Number(question('Digite o segundo numero inteiro: '))

//processamento
const soma = num1 + num2;
const sub = num1 - num2
const mult = num1 * num2;
const div = num1 / num2;

//Saida
if (opcao == 1) {
    console.log (`A soma dos valores é igual a ${soma}`)
}
else if (opcao == 2) {
    console.log(`A subtracao dos valores é igual a ${sub}`)
}
else if (opcao == 3) {
    console.log(`A multiplicacao dos valores é igual a ${mult}`)
}
else if (opcao == 4) {
    console.log(`A divisao dos valores é igual a ${div.toFixed(2)}`)
}
else {
    console.log('Digite um valor valido!')
}