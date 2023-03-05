//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import * as readsync from 'readline-sync'

//Entrada
const kg = readsync.question('Qual o valor em kg: ')

//Processamento
const g = kg * 1000

//Saída
console.log(`O valor em gramas é ${g} g`)