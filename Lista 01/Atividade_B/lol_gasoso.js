//40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import { question } from "readline-sync"
//Entrada
const anos = question('Digite a quatidade de anos: ')
const cigarros = question('Digite o número de cigarros fumados por dia: ')
const preco = question('Digite o preço da carteira: ')

//Processamento
var quantia = anos * 365 * cigarros
var quantia = quantia / 20
var valor = preco * quantia

//Saída
console.log(`O valor da compra é de R$${valor.toFixed(2)}`)