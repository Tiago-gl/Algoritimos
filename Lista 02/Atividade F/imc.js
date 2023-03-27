/*19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice 
de massa corpórea (IMC = peso / altura²). Ao final, escreva se a pessoa está com peso normal 
(IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). */

import { question } from "readline-sync";

//Entrada
function main () {
    const altura = question('Digite sua altura em metros: ')
    const peso = question('Digite seu peso em Kg: ')
//processamento
    var imc = calc_imc(altura, peso)
    if (imc < 25) {
        console.log('Seu peso esta normal')
    }
    else if (imc > 25 && imc < 30) {
        console.log('Voce esta com obesidade')
    }
    else if (imc > 30) {
        console.log('Voce esta com obesidade morbida')
    }
}

function calc_imc (altura, peso){
    var imc = (peso / (altura * altura))
    return imc
}
main()