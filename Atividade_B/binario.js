//31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync";

// Entrada
let binario = question("Binário: ");

//Processamento
let decimal = 0;
for (let i = 0; i < binario.length; i++) {
  let digito = Number(binario[i]);
  decimal += digito * Math.pow(2, i);
}

//Saida
console.log(decimal);