/*25. Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência. */

import { question } from "readline-sync";

//Entrada
let canais = {
    2: 0,
    4: 0,
    5: 0,
    7: 0,
    10: 0
  };
let totalPessoas = 0;

//Processamento
while (true) {
    let canal = parseInt(question("Digite o número do canal (2, 4, 5, 7, 10):"));
    if (canal === 0) {
      break; // se canal for zero, encerra o loop
    }
  
    let pessoas = parseInt(question("Digite o número de pessoas assistindo TV:"));
    canais[canal] += pessoas;
    totalPessoas += pessoas;
}

//Saida
for (let canal in canais) {
    let percentual = (canais[canal] / totalPessoas) * 100;
    console.log(`Canal ${canal}: ${percentual.toFixed(2)}%`);
}