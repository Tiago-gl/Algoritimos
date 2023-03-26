/* 7. Leia 3 (três) números (cada número corresponde a um lado do triângulo),
verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não 
pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero
(3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). 
Não existe lado com tamanho 0 (zero). */

import { question } from "readline-sync";

//Entrada
const lado1 = Number(question('Digite o primeiro lado: '))
const lado2 = Number(question('Digite o segundo lado: '))
const lado3 = Number(question('Digite o terceiro lado: '))

//Processamento e saida
const soma1 = lado1 + lado2
const soma2 = lado3 + lado1
const soma3 = lado3 + lado2

if ((soma1 < lado3 )|| (soma2 < lado3) || (soma3 < lado3)) {
    console.log('Não é um triangulo')
}
else if (lado1 == lado2 && lado1 == lado3) {
    console.log('É um triangulo equilátero') 
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('É um triangulo isósceles')
}
else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
    console.log('É um triangulo escaleno.')
}
else {
    console.log('Digite um valor valido')
}