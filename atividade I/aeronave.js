//Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
//pode levantar vôo ou não. Considere os seguintes critérios:

import { question } from "readline-sync";

//Entrada
let numContainers = parseInt(question("Digite o número de containers:"));
let pesoCarga = 0;
for (let i = 1; i <= numContainers; i++) {
  let pesoContainer = parseFloat(question(`Digite o peso do container ${i}:`));
  pesoCarga += pesoContainer;
}

//processamento
let numPassageiros = 0;
let pesoPassageiros = 0;
let numBilhete = parseInt(question("Digite o número do bilhete:"));
while (numBilhete !== 0) {
  numPassageiros++;
  let numBagagens = parseInt(question(`Digite a quantidade de bagagens do passageiro ${numPassageiros}:`));
  pesoPassageiros += 70 + numBagagens * 10;
  numBilhete = parseInt(question("Digite o número do bilhete (0 para sair):"));
}

let pesoCombustivel = parseFloat(question("Digite a quantidade de combustível (em litros):")) * 1.5;

let pesoDecolagem = pesoCarga + pesoPassageiros + pesoCombustivel;

if (pesoCombustivel < 10000 || pesoDecolagem > 500000) {
    console.log("A aeronave não pode levantar voo.");
} else {
    console.log(`A quantidade possível de combustível é de ${pesoCombustivel} kg.`);
    console.log(`A quantidade de passageiros é de ${numPassageiros}.`);
    console.log(`A quantidade total de volume de bagagem é de ${numPassageiros * 2}.`);
    console.log(`O peso dos passageiros é de ${pesoPassageiros} kg.`);
    console.log(`O peso da carga é de ${pesoCarga} kg.`);
    console.log("A aeronave pode levantar voo.");
}