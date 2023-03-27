/*27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do 
seu nascimento e a data (dia, mês e ano) atual. */

import { question } from "readline-sync";

//Entrada
function main() {
const diaNasc = question('Digite o dia do nascimento: ')
const mesNasc = question('Digite o mes de nascimento: ')
const anoNasc = question('Digite o ano de nascimento: ')
const diaAtual = question('Digite o dia atual: ')
const mesAtual = question('Digite o mes atual: ')
const anoAtual = question('Digite o ano atual: ')
var idade = calcularIdade(diaNasc, mesNasc, anoNasc, diaAtual, mesAtual, anoAtual)
console.log(idade)
}
//Processamento
function calcularIdade(diaNasc, mesNasc, anoNasc, diaAtual, mesAtual, anoAtual) {
    // Calcula a diferença de anos entre a data atual e a data de nascimento
    let idadeAnos = anoAtual - anoNasc;

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idadeAnos--;
    }
    let idadeMeses = mesAtual - mesNasc;
    if (idadeMeses < 0) {
        idadeMeses += 12;
    }
    let idadeDias = diaAtual - diaNasc;
    if (idadeDias < 0) {
        const ultimoDiaMes = new Date(anoAtual, mesAtual - 1, 0).getDate();
        idadeDias = ultimoDiaMes - diaNasc + diaAtual;
        idadeMeses--;
    }
    return `A idade é ${idadeAnos} anos, ${idadeMeses} meses e ${idadeDias} dias`;
}
main()