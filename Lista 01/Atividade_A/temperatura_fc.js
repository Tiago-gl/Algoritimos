//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import * as readsync from 'readline-sync'

//Entrada
const temp = Number(readsync.question('Digite a temperatura em °F: '))

//Processamento
const celsius = (5 * temp - 160) / 9

//Saída
console.log(`A temperatura de ${temp}°F corresponde a ${celsius.toFixed(1)}°C`)