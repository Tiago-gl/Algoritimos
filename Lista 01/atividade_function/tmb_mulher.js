/*A taxa metabólica basal (TMB) é nada mais do que a quantidade de energia mínima que seu corpo precisa gastar diariamente 
para manter seu organismo funcionando plenamente. Ou seja, é a energia necessária para a manutenção de suas funções vitais,
como os batimentos cardíacos, pressão arterial, respiração, imunidade e o nível correto da temperatura corporal.*/

import { question } from "readline-sync"

function main() {
    const peso = question('Digite seu peso: ')
    const altura = question('Digite sua altura: ')
    const idade = question('Digite sua idade: ')
    const genero = question('Digite seu genero: ')
    if (genero == 'F') {
        calc(peso, idade, altura)
    }
    else {
        console.log('Tente no outro arquivo: ')
    }
}
function calc(peso, idade, altura) {
    var TMB = Math.floor(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade))
    console.log(`Seu metabolismo basal é igual a ${TMB.toFixed(2)}`)
}

main()