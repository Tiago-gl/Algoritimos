/**
 *  2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
 */

import * as readsync from 'readline-sync'

//entrada
const horas = Number(readsync.question('Horas: '))
const minutos = Number(readsync.question('Minutos: '))
//processamento
const horasMinutos = horas * 60 + minutos
//saída
console.log(horasMinutos)