/*Crie um programa que receba a idade de uma pessoa e calcule a sua frequência cardíaca máxima, que é dada pela fórmula 220 menos a idade.
O programa deve então calcular a faixa de batimentos cardíacos ideais para atividades físicas moderadas e intensas,
que correspondem a 50-70% e 70-85% da frequência cardíaca máxima, respectivamente.*/

import { question } from "readline-sync"

function main() {

    const idade = question('Digite sua idade: ')
    const genero = question('Qual seu genero: ')
    if (genero == 'masculino') {
        calc_masc(idade)
    }
    else if (genero == 'feminino') {
        calc_fem(idade)
    }
    else {
        console.log('Por favor digite somente masculino ou feminino!')
    }
}

//Processamento
function calc_masc(idade){
    var frequencia = 220 - idade
    var batimentomoderado = frequencia * 0.65
    var batimentointensa = frequencia * 0.80
    console.log(`A frequência cardíaca máxima é de ${frequencia.toFixed(2)} bpm.`)
    console.log(`A faixa de batimentos cardíacos para atividades moderadas é de ${batimentomoderado.toFixed(2)} bpm.`)
    console.log(`A faixa de batimentos cardíacos para atividades intensas é de ${batimentointensa.toFixed(2)} bpm`)
}
function calc_fem(idade){
    var frequencia = 226 - idade
    var batimentomoderado = frequencia * 0.65
    var batimentointensa = frequencia * 0.80
    console.log(`A frequência cardíaca máxima é de ${frequencia.toFixed(2)} bpm.`)
    console.log(`A faixa de batimentos cardíacos para atividades moderadas é de ${batimentomoderado.toFixed(2)} bpm.`)
    console.log(`A faixa de batimentos cardíacos para atividades intensas é de ${batimentointensa.toFixed(2)} bpm`)
    
}
main()