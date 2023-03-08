//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import { question } from "readline-sync";

//Entrada
const numero = Number(question('Digite um numero inteiro de 3 digitos: '))

//Processamento
const centena = parseInt(numero / 100)
const dezena = parseInt((numero / 10) %10)
const unidade = parseInt(numero % 10)
var numero1 = unidade * 100 + dezena * 10 + centena
let diff = numero1 + numero

//Saída
console.log(`O inverso do número ${numero} é igual a ${numero1}`)
console.log(`A diferença entre ${numero} e ${numero1} é igual a ${diff}`)