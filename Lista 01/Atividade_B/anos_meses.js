/**
 * 29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
 */

import * as readsync from 'readline-sync'

//Entrada
let meses = Number(readsync.question('Digite um número inteiro de meses: '))

//Processamento
let ano = 0
let mes = 0

if(meses >= 12){
    ano = parseInt(meses / 12)
    mes = parseInt(meses % 12)
}
 else {
    mes = parseInt(meses)
    ano = 0
 }

//Saída
console.log(`${ano} anos e ${mes} meses`)