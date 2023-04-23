//12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
//responda quem ganha a partida. A partida chega ao final se:

import { question } from "readline-sync";

//Entrada
let player1Score = 0;
let player2Score = 0;
let winningScore = 21;
let scoreDifference = 2;

//Processamento
while (true) {
  let winningPlayer = parseInt(question("Digite o código do jogador que ganhou o ponto (1 ou 2):"));

  if (winningPlayer === 1) {
    player1Score++;
  } else if (winningPlayer === 2) {
    player2Score++;
  }

  if (player1Score >= winningScore && player1Score - player2Score >= scoreDifference) {
    console.log("O jogador 1 ganhou a partida!");
    break;
  } else if (player2Score >= winningScore && player2Score - player1Score >= scoreDifference) {
    console.log("O jogador 2 ganhou a partida!");
    break;
  }
}