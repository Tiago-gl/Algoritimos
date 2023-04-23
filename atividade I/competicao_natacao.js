/*Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:*/

import { question } from "readline-sync";

//Entrada
const pontos = [9, 6, 4, 3];

let pontosA = 0;
let pontosB = 0;

let numeroProva = parseInt(question("Digite o número da prova:"));
let quantidadeNadadores = parseInt(question("Digite a quantidade de nadadores:"));

//processamento
while (numeroProva !== 0 && quantidadeNadadores !== 0) {
    for (let i = 0; i < quantidadeNadadores; i++) {
      const nome = question("Digite o nome do nadador:");
      const classificacao = parseInt(question("Digite a classificação do nadador:"));
      const tempo = parseFloat(question("Digite o tempo do nadador (em segundos):"));
      const clube = question("Digite o clube do nadador (a ou b):");
  
      const pontosNadador = classificacao <= 4 ? pontos[classificacao - 1] : 0;
      if (clube === "a") {
        pontosA += pontosNadador;
      } else if (clube === "b") {
        pontosB += pontosNadador;
      }
    }
    
    numeroProva = parseInt(question("Digite o número da próxima prova:"));
    quantidadeNadadores = parseInt(question("Digite a quantidade de nadadores:"));
}

//Saida
console.log("Pontos do clube A:", pontosA);
console.log("Pontos do clube B:", pontosB);

if (pontosA > pontosB) {
  console.log("O clube A é o vencedor!");
} else if (pontosB > pontosA) {
  console.log("O clube B é o vencedor!");
} else {
  console.log("A competição terminou empatada!");
}