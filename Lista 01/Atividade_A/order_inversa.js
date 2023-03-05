//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import * as readsync from 'readline-sync'

//Entrada
const A = Number(readsync.question('Digite o primeiro número: '))
const B = Number(readsync.question('Digite o segundo número: '))

//Saída
console.log(`numeros na ordem invertida são: ${B} ${A}`)