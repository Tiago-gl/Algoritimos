//15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
//e na base hexadecimal.

import { question } from "readline-sync";

//Entrada
let decimal = parseInt(question("Digite um número decimal entre 0 e 255:"));

let binario = decimal.toString(2);

//Processamento
let hexadecimal = decimal.toString(16);

console.log("Decimal: " + decimal);
console.log("Binário: " + binario);
console.log("Hexadecimal: " + hexadecimal);
