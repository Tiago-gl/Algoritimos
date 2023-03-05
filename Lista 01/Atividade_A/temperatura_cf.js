//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import * as readsync from 'readline-sync'

//Entrada
const temp = Number(readsync.question('Digite a temperatura em °C: '))

//Processamento
const f = (9 * temp + 160) / 5

//Saída
console.log(`A temperatura de ${temp}°C equivale a ${f}°F`)