/*20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição; */

import { question } from "readline-sync";

//Entrada
const distanciaTotal = 600;
let distanciaPercorrida = 0;
let litrosConsumidos = 50;

//Processamento
while (distanciaPercorrida < distanciaTotal && litrosConsumidos < 100) {
    const distanciaMedida = Number(question("Distância percorrida desde a última medição (km):"));
    const litrosMedidos = Number(question("Quantidade de litros consumidos para percorrer a distância indicada:"));
    
    distanciaPercorrida += distanciaMedida;
    litrosConsumidos += litrosMedidos;
    
    const consumo = distanciaPercorrida / litrosConsumidos;
    
    console.log(`Consumo atual: ${consumo.toFixed(2)} km/l`);
  }
  
  //Saida
  if (distanciaPercorrida >= distanciaTotal) {
    console.log("O carro chegou ao seu destino!");
  } else {
    console.log("O carro parou por falta de combustível.");
  }