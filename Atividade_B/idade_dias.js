//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressão apenas em dias.

import { question } from "readline-sync"

//Entrada
const ano = Number(question('Digite sua idade: '))
const mes = Number(question('Quantos meses fazem apos seu aniversario: '))
const dia = Number(question('Quantos dias fazem apos seu aniversario: '))

//Processamento
var dias = (ano * 365) + (mes * 30) + dia

//Saída
console.log(`Sua idade em dias é: ${dias}`)