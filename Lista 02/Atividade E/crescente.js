//5. Leia 3 (três) números e escreva-os em ordem crescente.

import { question } from "readline-sync";

//Entrada
const num1 = Number(question('Digite o primeiro número: '))
const num2 = Number(question('Digite o segundo número: '))
const num3 = Number(question('Digite o terceiro número:'))

//processamento e saida
if (num1 > num2 && num2 > num3) {
    console.log(`${num1} ${num2} ${num3}`)
}
else if (num1 < num2 && num2 < num3) {
    console.log(`${num3} ${num2} ${num1}`)
}
else if (num1 > num3 && num2 < num3) {
    console.log(`${num1} ${num3} ${num2}`)
}
else if(num1 < num2 && num2 > num3 && num1 < num3){
    console.log(` ${num2} ${num3} ${num1}`)
}
else if(num1 < num2 && num2 > num3 && num1 > num3) {
    console.log(` ${num2} ${num1} ${num3}`)
}
else {
    console.log('Os números são iguais.')
}