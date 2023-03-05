//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import * as readsync from 'readline-sync'

//Entrada
const raio = Number(readsync.question('Digite o raio da circunferência: '))

//Processamento
const comprimento = 2 * 3.14 * raio

//Saída
console.log(`O comprimento da circunferência é ${comprimento.toFixed(1)} m²`)