/* O IAC, Índice de Adiposidade Corporal é um novo método de medição corporal criado por pesquisadores da 
Universidade do Sul da Califórnia nos EUA que avalia a adiposidade em adultos. */

import { question } from "readline-sync";

function calcularIAC(quadril, altura) {
  const IAC = (quadril / (altura * Math.sqrt(altura))) - 18;
    return IAC;
}

function calcularQuadrilMinimo(altura) {
  return (altura * Math.sqrt(altura) * 18).toFixed(2);
}

function calcularQuadrilMaximo(altura) {
  return (altura * Math.sqrt(altura) * 20.9).toFixed(2);
}

function verificarClassificacao(IAC) {
    if (IAC < 0) {
        console.log("IAC inválido");
        return;
    }
    if (IAC >= 0 && IAC < 9) {
        console.log("Magra");
    } else if (IAC >= 9 && IAC < 21) {
        console.log("Normal");
    } else if (IAC >= 21 && IAC < 26) {
        console.log("Sobrepeso");
    } else if (IAC >= 26 && IAC < 30) {
        console.log("Obesidade grau 1");
    } else {
        console.log("Obesidade grau 2 ou superior");
    }
}

function main() {
    const quadril = Number(question('Digite quantos centímetros de quadril você tem: '));
    const altura = Number(question('Digite sua altura em metros: '));

    const IAC = calcularIAC(quadril, altura);
    console.log(`Seu IAC é: ${IAC.toFixed(2)}`);

    const quadrilMinimo = calcularQuadrilMinimo(altura);
    console.log(`O quadril mínimo para a faixa Normal é: ${quadrilMinimo} cm`);

    const quadrilMaximo = calcularQuadrilMaximo(altura);
    console.log(`O quadril máximo para a faixa Normal é: ${quadrilMaximo} cm`);

    verificarClassificacao(IAC);
}

main();
