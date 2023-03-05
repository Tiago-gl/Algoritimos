//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import * as readsync from 'readline-sync'

//entrada
const salário = Number(readsync.question('qual o valor do salario: '))

//Processamento
const novoSalario = salário + (salário * 0.25)

//saída
console.log(`O novo salário é ${novoSalario.toFixed(2)}$`)