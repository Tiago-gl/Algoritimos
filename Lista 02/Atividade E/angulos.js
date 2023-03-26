/* 6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo),
verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos 
é igual a 180º). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º),
retângulo (1 ângulo = 90º) ou obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º.*/

import { question } from "readline-sync";

//Entrada
const ang1 = Number(question('Digite o primeiro angulo: '))
const ang2 = Number(question('Digite o segundo angulo: '))
const ang3 = Number(question('Digite o terceiro angulo: '))

//processamento e saida
const angTotal = ang1 + ang2 + ang3
if (angTotal < 180) {
    console.log('Não é um triangulo.')
}
else if (ang1 > 90 && ang2 > 90 && ang3 > 90) {
    console.log('É um triangulo acutângulo.')
}
else if (ang1 == 90 || ang2 == 90 || ang3 == 90) {
    console.log('É um triangulo retângulo.')
}
else if (ang1 < 90 || ang2 < 90 || ang3 < 90) {
    console.log('É um triangulo obtusângulo')
}
else {
    console.log('Digite um valor valido.')
}