/*22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 
variáveis inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), 
sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um 
dia e terminar no dia seguinte. */

import { question } from "readline-sync";

//Entrada
var horaIni = question('Digite a hora de inicio do jogo: ')
var minIni = question('Digite os minutos de inicio do jogo: ')
var horaFinal = question('Digite a hora do final do jogo: ')
var minFinal = question('Digite os minutos do final de jogo: ')

//Processamento
if (minFinal < minIni) {
    minFinal += 24 * 60;
}
var duracaoMin = minFinal - minIni
var duracaoHora = Math.floor(duracaoMin / 60)
var minRestante = duracaoMin % 60

//Saida
console.log(`Duração do jogo: ${duracaoHora} horas e ${minRestante} minutos`);