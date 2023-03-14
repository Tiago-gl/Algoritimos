// Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h), calcule o tempo da prova em minutos.

import { question } from "readline-sync"

function main() {
    var dist = question('Digite a distancia da prova: ')
    var velocidade = question('Digite velocidade do participante: ')
    calc(dist, velocidade)
}

function calc(dist, velocidade) {
    var velocidade = (velocidade * 1000) / 60
    var tempo = (dist / (velocidade * 1000)) * 60
    var tempo = tempo * 60
    
    console.log(`O tempo da prova em minutos: ${tempo.toFixed(2)}`)
}

main()