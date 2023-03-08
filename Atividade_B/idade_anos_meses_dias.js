//37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import { question } from "readline-sync"

//Entrada
const dia = parseInt(question('Digite seus dias de vida: '))

//Processamento
var ano = Math.floor(dia/365)
var mes = Math.floor((dia%365)/30)
var dias = Math.floor(dia%30)

//Saída
console.log(`Você tem: ${ano} anos, ${mes} meses e ${dias} dias`)