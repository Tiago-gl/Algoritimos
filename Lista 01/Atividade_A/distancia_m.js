//22. Leia um valor em km, calcule e escreva o equivalente em m.

import * as readsync from 'readline-sync'

//Entrada
const km = Number(readsync.question('Digite um valor em km: '))

//Processamento
const m = km * 1000

//Saída
console.log(`${km} Km equivale a ${m} Metros.`)