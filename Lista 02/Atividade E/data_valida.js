//10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

import { question } from "readline-sync";

//Entrada
const [dia, mes, ano] = question('Digite uma data (dia, mês e ano): ').split('/')

//processamento
if (dia < 31 && mes < 12 && ano < 2100) {
    console.log(`Data valida: ${dia}/${mes}/${ano}.`)
}
else {
    console.log(`Digite uma data válida`)
}