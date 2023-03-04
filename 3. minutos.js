/**
 * 3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
 */
import * as readsync from 'readline-sync'

//Entrada
const numero = Number(readsync.question('Digite um valor em minutos: '))
//Processamento
const Horas = parseInt(numero / 60)
const Minutos = numero % 60
//Saída
console.log(`O equivalente em horas é de ${Horas} horas e o equivalente em minutos é de ${Minutos} minutos.`)
