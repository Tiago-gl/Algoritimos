import { question } from "readline-sync";

//Entrada
let num1 = parseInt(question("Digite o primeiro número:"));
let num2 = parseInt(question("Digite o segundo número:"));

// Inicialização das variáveis
let quociente = 0;
let resto = num1;

// Cálculo do quociente e resto
while (resto >= num2) {
  resto = resto - num2;
  quociente++;
}

// Saída de dados
console.log("Quociente:", quociente);
console.log("Resto:", resto);