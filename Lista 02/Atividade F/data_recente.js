//23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva 
//qual delas é a mais recente.

import { question } from "readline-sync";

//Entrada
const dia1 = question('Digite o primeiro dia: ')
const mes1 = question('Digite o primeiro mes: ')
const ano1 = question('Digite o primeiro ano: ')
const dia2 = question('Digite o segundo dia: ')
const mes2 = question('Digite o segundo mes: ')
const ano2 = question('Digite o segundo ano: ')

//Processamento
if (ano1 > ano2) {
    console.log("A primeira data é a mais recente")
}
else if (ano1 < ano2) {
    console.log("A segunda data é a mais recente")
}
else if (ano1 == ano2 && mes1 > mes2) {
    console.log("A primeira data é a mais recente")
}
else if (ano1 == ano2 && mes2 > mes1) {
    console.log("A segunda data é a mais recente")
}
else if (ano1 == ano2 && mes1 == mes2 && dia1 > dia2) {
    console.log("A primeira data é a mais recente")
}
else if (ano1 == ano2 && mes1 == mes2 && dia1 < dia2) {
    console.log("A segunda data é a mais recente")
}
else {
    console.log("As duas datas são iguais")
}