/**41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos 
(aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%,
escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.
 */
import { question } from "readline-sync"
//Entrada
var custo = Number(question("Informe o custo de fábrica do carro: "))

//Processamento 
var total = custo + (0.28 * custo) + (0.45 * custo)

//Saída
console.log(`O valor do veiculo ao consumidor é de ${total.toFixed(2)} $`)