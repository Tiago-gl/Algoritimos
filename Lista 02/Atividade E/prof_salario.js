/*15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido
por cada um. Escreva na tela qual dos professores tem salário total maior. */

import { question } from "readline-sync";

//Entrada
const hora1 = Number(question('Digite a quantidade de horas do primeiro professor: '))
const hora2 = Number(question('Digite a quantidade de horas do segundo professor: '))
const valor1 = Number(question('Digite o valor por hora do primeiro professor: '))
const valor2 = Number(question('Digite o valor por hora do segundo professor: '))

//Processamento
var salario1 = hora1 * valor1
var salario2 = hora2 * valor2

//Saida
if (salario1 > salario2) {
    console.log("O primeiro professor tem salário total maior.");
}
else if (salario2 > salario1) {
    console.log("O segundo professor tem salário total maior.");
} 
else {
    console.log("Os dois professores têm salário total igual.");
}