/*
4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
 */
import * as readsync from 'readline-sync'

//Entrada
const dolar = readsync.question('Digite o valor do dólar: ')
const Numero = readsync.question('Digite o valor em dólares: ')
//Processamento
const valor = dolar * Numero

//Saída
console.log(`O valor equivalente em real é R$ ${valor}`)