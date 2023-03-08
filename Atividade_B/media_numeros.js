//34. Leia 3 números, calcule e escreva a média dos números.
import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro numero: '))
const num2 = Number(question('Digite o segundo numero: '))
const num3 = Number(question('Digite o terceiro numero: '))

//Processamento
const media = (num1 + num2 + num3) / 3

//Saída
console.log(`A media dos números é: ${media}`)
