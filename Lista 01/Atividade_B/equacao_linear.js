//Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo. Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

import { question } from "readline-sync"
//Entrada
const a = question('Digite o valor de a: ')
const b = question('Digite o valor de b: ')
const c = question('Digite o valor de c: ')
const d = question('Digite o valor de d: ')
const e = question('Digite o valor de e: ')
const f = question('Digite o valor de f: ')

//Processamento 
const x = parseInt((c * e) - (b * f) / (a * e) - (b * d))
const y = parseInt((a * f) - (c * d) / (a * e) - (b * d))

//Saída
console.log(`O valor de x é ${x.toFixed(2)}`)
console.log(`O valor de y é ${y.toFixed(2)}`)