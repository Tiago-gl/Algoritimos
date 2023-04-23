/*19. Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
boi mais magro e do boi mais gordo. (Flag: n.o identificação=0) */

import { question } from "readline-sync";

//Entrada
let id, weight, heaviest_id = 0, heaviest_weight = -Infinity, 
    lightest_id = 0, lightest_weight = Infinity;

//Processamento
while (true) {
    id = question("Digite o número de identificação do boi (0 para encerrar):");
    if (id == 0) break;
        
    weight = parseFloat(question("Digite o peso do boi:"));
        
    if (weight > heaviest_weight) {
          heaviest_id = id;
          heaviest_weight = weight;
    }
        
    if (weight < lightest_weight) {
          lightest_id = id;
          lightest_weight = weight;
    }
}

//Saida   
console.log("O boi mais pesado tem o número de identificação " + heaviest_id + " e pesa " + heaviest_weight + " kg.");
console.log("O boi mais magro tem o número de identificação " + lightest_id + " e pesa " + lightest_weight + " kg.");