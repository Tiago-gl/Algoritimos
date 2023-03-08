//32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
import { question } from "readline-sync";

//Entrada
const numero = question('Digite um numero inteiro de 3 digitos: ')

//Processamento
const centena = parseInt(numero / 100)
const dezena = parseInt((numero / 10) %10)
const unidade = parseInt(numero % 10)
var numero1 = unidade * 100 + dezena * 10 + centena
let diff = numero1 - numero
if(diff < 0){
    diff = diff * -1
}
//Saída
console.log(`O inverso do número ${numero} é igual a ${numero1}`)
console.log(`A diferença entre ${numero} e ${numero1} é igual a ${diff}`)