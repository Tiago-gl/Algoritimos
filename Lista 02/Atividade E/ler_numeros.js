/* 11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1
se opção igual a 1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção 
for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3.*/

import { question } from "readline-sync";

//Entrada
const opcao = Number(question('Escolha entre 1, 2 ou 3: '))
const num1 = Number(question('Digite o primeiro numero: '))
const num2 = Number(question('Digite o segundo numero: '))
const num3 = Number(question('Digite o terceiro numero: '))

//processamento
if (opcao === 1) {
    console.log(`O valor de num1 é ${num1}.`);
}
else if (opcao === 2) {
    console.log(`O valor de num2 é ${num2}.`);
} 
else if (opcao === 3) {
    console.log(`O valor de num3 é ${num3}.`);
} 
else {
    console.log("Opção inválida. Digite 1, 2 ou 3.");
}