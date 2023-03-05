//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import * as readsync from 'readline-sync'

//Entrada
const raio = Number(readsync.question('Digite o raio da esfera: '))

//Processamento
const volume = (4 * 3.14 * raio * raio * raio) / 3

//Saída
console.log(`O volume da esfera é de ${volume.toFixed(2)} litros`)