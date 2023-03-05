//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import * as readsync from 'readline-sync'

//entrada
const nota1 = Number(readsync.question('Digite a primeira nota: '))
const peso1 = Number(readsync.question('Digite o peso da primeira nota: '))
const nota2 = Number(readsync.question('Digite a segunda nota: '))
const peso2 = Number(readsync.question('Digite o peso da segunda nota: '))
const nota3 = Number(readsync.question('Digite a terceira nota: '))
const peso3 = Number(readsync.question('Digite o peso da terceira nota: '))

//processamento
const media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

//saída 
console.log(`A média do aluno é ${media.toFixed(2)}`)
console.log(`O aluno está ${media >= 7? 'Aprovado' : 'Reprovado'}`)