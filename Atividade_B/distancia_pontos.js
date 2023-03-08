//42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

import { question } from "readline-sync"
//Entrada
const x1 = Number(question('Digite a cordenada X do primeiro ponto: '))
const y1 = Number(question('Digite a cordenada Y do primeiro ponto: '))
const x2 = Number(question('Digite a cordenada X do segundo ponto: '))
const y2 = Number(question('Digite a cordenada Y do segundo ponto: '))

//Processamento 
const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//Saída
console.log(`A distância entre ${x1},${y1} e ${x2},${y2} é igual a ${distancia.toFixed(2)}`)