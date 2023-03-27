/*16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das
duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler
a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa 
deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”.*/

import { question } from "readline-sync";

//Entrada
const nota1 = Number(question('Digite a primeira nota: '))
const nota2 = Number(question('Digite a segunda nota: '))

//Processamento
const media = parseFloat((nota1 + nota2) / 2)

//Saida
if (media >= 7) {
    console.log('Aluno aprovado')
}
else if (media < 7) {
    console.log('Aluno de prova final')
    var final = question('Qual a nota do exame final: ')
    var nova_media = parseFloat((parseFloat(final) + parseFloat(media)) / 2)
    if (nova_media >= 5) {
        console.log('Aluno aprovado pelo exame final')
    }
    else if (nova_media < 5) {
        console.log('Aluno reprovado pelo exame final')
    }
}
else {
    console.log('Digite um valor valido')
}