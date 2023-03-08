//39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

import { question } from "readline-sync"
//Entrada
const A = parseInt(question("Digite o primeiro número inteiro positivo: "))
const B = parseInt(question("Digite o segundo número inteiro positivo: "))
const C = parseInt(question("Digite o terceiro número inteiro positivo: "))

//Processamento 
const R = parseInt((A + B) * (A + B))
const S = parseInt((B + C) * (B + C))
const D = ((R + S) /2)

//Saída
console.log(`o resultado da expressão é ${D}`)