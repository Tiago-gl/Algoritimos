//20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, 
//terceiro ou quarto) em que o ângulo se localiza.

import { question } from "readline-sync";

//Entrada
const angulo = question('Digite um angulo entre 0 a 360: ')

//Processamento
if (angulo >= 90) {
    console.log('Este angulo esta no primeiro quadrante.')
}
else if (angulo >= 180) {
    console.log('Este angulo esta no segundo quadrante.')
}
else if (angulo >= 270) {
    console.log('Este angulo esta no terceiro quadrante.')
}
else if (angulo >=360) {
    console.log('Este angulo esta no quarto quadrante.')
}
else {
    console.log('Digite um valor valido')
}