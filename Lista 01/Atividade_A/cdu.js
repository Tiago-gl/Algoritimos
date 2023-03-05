/**
 * 5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
*/

import * as readsync from 'readline-sync'

//Entrada
const num = readsync.question('Digite um número inteiro de 3 digitos: ')
if (num < 100){
    console.log('Número inválido, tente novamente!')
}
else{
//Processamento
const centena = parseInt(num / 100)
const dezena = parseInt(num % 100 / 10)
const unidade = parseInt(num % 10)

//Saída
console.log(centena + dezena + unidade)
}

