//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import { question } from "readline-sync";

//Entrada
function main() {
    const lado1 = Number(question('Digite o primeiro lado: '));
    const lado2 = Number(question('Digite o segundo lado: '));
    const lado3 = Number(question('Digite o terceiro lado: '));
    const ehRetangulo = calc_triangulo(lado1, lado2, lado3)
    if (ehRetangulo) {
        const { hipotenusa, cateto1, cateto2 } = ehRetangulo;
        return `O triângulo é retângulo. Hipotenusa: ${hipotenusa}. Catetos: ${cateto1} e ${cateto2}.`;
    } else {
        return "Os lados informados não formam um triângulo retângulo.";
    }
}

//Processamento
function calc_triangulo(lado1, lado2, lado3) {
    const maiorLado = Math.max(lado1, lado2, lado3);
    const menorLado = lado1 + lado2 + lado3 - maiorLado;
    if (menorLado <= maiorLado) {
        return false;
    }
    var hipotenusa, cateto1, cateto2;
    if (lado1 === maiorLado) {
        hipotenusa = lado1;
        cateto1 = lado2;
        cateto2 = lado3;
    } else if (lado2 === maiorLado) {
        hipotenusa = lado2;
        cateto1 = lado1;
        cateto2 = lado3;
    } else {
        hipotenusa = lado3;
        cateto1 = lado1;
        cateto2 = lado2;
    }
    const ehRetangulo = (hipotenusa**2 === cateto1**2 + cateto2**2);
    if (ehRetangulo) {
        return { hipotenusa, cateto1, cateto2 };
    } else {
        return false;
    }
}

console.log(main());