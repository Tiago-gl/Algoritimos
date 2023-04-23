/*14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados: */

import { question } from "readline-sync";

//Entrada
let votosSerra = 0;
let votosDilma = 0;
let votosCiro = 0;
let votosIndecisos = 0;
let votosOutros = 0;
let votosNulos = 0;
let totalEntrevistados = 0;

//Processamento
let opcao = parseInt(question("Digite a opinião do entrevistado (-1 para encerrar):\n45 - Serra\n13 - Dilma\n23 - Ciro Gomes\n99 - Indeciso\n98 - Outros\n0 - Nulo/Branco"));

while (opcao !== -1) {
  switch(opcao) {
    case 45:
      votosSerra++;
      break;
    case 13:
      votosDilma++;
      break;
    case 23:
      votosCiro++;
      break;
    case 99:
      votosIndecisos++;
      break;
    case 98:
      votosOutros++;
      break;
    case 0:
      votosNulos++;
      break;
    default:
      console.log("Opção inválida!");
      break;
  }
  
  totalEntrevistados++;
  
  opcao = parseInt(question("Digite a opinião do entrevistado (-1 para encerrar):\n45 - Serra\n13 - Dilma\n23 - Ciro Gomes\n99 - Indeciso\n98 - Outros\n0 - Nulo/Branco"));
}

const porcentagemSerra = (votosSerra / totalEntrevistados) * 100;
const porcentagemDilma = (votosDilma / totalEntrevistados) * 100;
const porcentagemCiro = (votosCiro / totalEntrevistados) * 100;
const porcentagemIndecisos = (votosIndecisos / totalEntrevistados) * 100;
const porcentagemOutros = (votosOutros / totalEntrevistados) * 100;
const porcentagemNulos = (votosNulos / totalEntrevistados) * 100;

let possibilidadeSegundoTurno = false;

if (porcentagemSerra < 50 && porcentagemDilma < 50 && porcentagemCiro < 50) {
  possibilidadeSegundoTurno = true;
}

//Saida
console.log("Resultados da pesquisa:\n");
console.log(`Serra: ${porcentagemSerra.toFixed(2)}%`);
console.log(`Dilma: ${porcentagemDilma.toFixed(2)}%`);
console.log(`Ciro Gomes: ${porcentagemCiro.toFixed(2)}%`);
console.log(`Indecisos: ${porcentagemIndecisos.toFixed(2)}%`);
console.log(`Nulos: ${porcentagemNulos.toFixed(2)}%`);