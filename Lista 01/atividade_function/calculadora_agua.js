/*Crie um programa que receba o peso e a atividade física diária de uma pessoa e calcule a quantidade de água que ela deve beber por dia.
A quantidade de água recomendada é de 35 ml por quilo de peso para pessoas com atividade física moderada, e 45 ml por quilo de peso para pessoas com atividade física intensa. 
O resultado do cálculo deve ser exibido na tela. */

import { question } from "readline-sync"
function main() {
    const peso = Number(question("Digite seu peso: "))
    const atividade = (question("Sua atividade fisica é intensa ou moderada: "))

    if (atividade === "moderada") {
        moderada(peso)
    }
    else if (atividade === "intensa") {
        intensa(peso) 
    }
    else {
        console.log(`atividade invalida`)
    }
}
function moderada(peso) {
    var quantidade = Number(peso * 35)
    var quantidade = quantidade / 1000
    console.log(`Você deve ingerir ${quantidade.toFixed(2)} L de água por dia.`)
}
function intensa(peso){
    var quantidade = Number(peso * 45)
    var quantidade = quantidade / 1000
    console.log(`Você deve ingerir ${quantidade.toFixed(2)} L de água por dia.`)
}
main()