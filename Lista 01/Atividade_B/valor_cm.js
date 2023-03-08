//24. Leia um valor em m, calcule e escreva o equivalente em cm.

import * as readsync from 'readline-sync'

//Entrada
var valor = Number(readsync.question('Digite um valor em metros: '))    

//Processamento
valor = valor * 1000

//Saída
console.log(`O valor em cm é ${valor} cm`)   