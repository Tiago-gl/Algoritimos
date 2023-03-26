/* 8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa,
calcule e escrevasua idade exata (em anos). */

import { question } from "readline-sync";

//Entrada
const [diaAtual, mesAtual, anoAtual] = question('Digite a data atual (dd/mm/aaaa): ').split('/');
const [diaNasc, mesNasc, anoNasc] = question('Digite a data do seu nascimento (dd/mm/aaaa): ').split('/');

//processamento
let idade = anoAtual - anoNasc;
if (mesNasc > mesAtual || (mesNasc === mesAtual && diaNasc > diaAtual)) {
    idade--;
}

//saida
console.log(`Você tem ${idade} anos.`);