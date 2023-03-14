/* O IAC, Índice de Adiposidade Corporal é um novo método de medição corporal criado por pesquisadores da 
Universidade do Sul da Califórnia nos EUA que avalia a adiposidade em adultos. */

import { question } from "readline-sync"

function main() {
    const quadril = Number(question('Digite quantos centimentros de quadril você tem: '))
    const altura = Number(question('Digite sua altura: '))
    var IAC = 0
    if (IAC <= 0 > 8.9) {
        calc(quadril, altura)
        console.log('Você está magra')
        console.log('O tamanho ideal de quadril para você ficar normal é entre 80 a 90 cm de quadril')
    }
    else if (IAC <= 9 > 20.9) {
        calc(quadril, altura)
        console.log('Você está normal')
    }
    else if (IAC <= 21 > 25.9) {
        calc(quadril, altura)
        console.log('Você está com sobrepeso')
        console.log('O tamanho ideal de quadril para você ficar normal é entre 85 a 95cm')
    }
    else if (IAC <= 26 > 29.9) {
        calc(quadril, altura)
        console.log('Você está com obesidade grau 1')
        console.log('O tamanho ideal de quadril para você ficar normal é entre 85 a 95cm')
    }
    else {
        console.log('Digite um valor valido')
    }
}

function calc(quadril, altura) {
   var IAC = Math.floor(quadril / (altura * Math.sqrt(altura))) - 18
}
main()