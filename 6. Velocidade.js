/*
* 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
*/
import * as readsync from 'readline-sync'

// Entrada
const velocidade_km = Number(readsync.question('Velocidade Km/h: '))

// Processamento
const velocidade_ms = velocidade_km / 3.6

// Saída
console.log(velocidade_km, 'km/h equivale a ', velocidade_ms, 'm/s')
