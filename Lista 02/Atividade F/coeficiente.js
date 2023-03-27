/*24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale 
lembrar que o coeficiente A deve ser diferente de 0 (zero). */

import { question } from "readline-sync";

//Entrada
function main() {
const A = question('Digite o primeiro numero da equacao: ')
const B = question('Digite o segundo numero da equacao: ')
const C = question('Digite o terceiro numero da equacao: ')
var raiz = calc_raiz(A, B, C)
}

main()
//Processamento
function calc_raiz(A, B, C) {
    // calcula o discriminante
    const delta = B**2 - 4*A*C
    if (delta < 0) {
        return "A equação não tem raízes reais.";
    }
    const x1 = (-B + Math.sqrt(delta)) / (2*A);
    const x2 = (-B - Math.sqrt(delta)) / (2*A);
    
    return `As raízes da equação são ${x1} e ${x2}.`;
}