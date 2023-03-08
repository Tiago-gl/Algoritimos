/*44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses
componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.
*/

import { question } from "readline-sync"
//Entrada
var latao = question("Qual a quantidade de latao: ")

//Processamento 
const cobre = latao * 0.7
const zinco = latao * 0.3

//Saída
console.log(`A quantidade de cobre é de ${cobre.toFixed(2)} kg.`)
console.log(`A quantidade de zinco é de ${zinco.toFixed(2)} kg.`)