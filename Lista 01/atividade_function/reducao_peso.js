/*Uma pessoa estabeleceu como meta perder X % do Peso Corporal em Y semanas. Sabendo que 1 kg 
de gordura corresponde a cerca de 7700 kcal, calcule o déficit calórico médio diário necessário 
para alcançar essa meta. Pergunte ao usuário qual seu Peso atual, qual sua meta % de redução de 
Peso e em quantas semanas. Pergunte ainda quanto ele tá disposto a consumir de kcal diariamente.*/

import { question } from "readline-sync"

function main() {
    const peso = Number(question("Digite seu peso: "))
    const meta = Number(question("Digite sua meta: "))
    const semanas = Number(question("Digite a quantidade de semanas: "))
    var kcal = Number(question("Quanto de kcal deseja consumir diariamente: "))
    calc(peso, meta, semanas, kcal)
}

function calc(peso, meta, semanas, kcal) {
    const gordura = peso * (meta / 100)
    const calorias = gordura * 7700
    const deficit = calorias / (semanas * 7)
    const exercicio = (deficit - kcal) / 100
    console.log(`Para alcançar a meta de perda de ${meta}% de peso em ${semanas} semanas, você precisa de um déficit calórico diário médio de ${deficit.toFixed(2)} kcal.
Para atingir esse déficit calórico com sua ingestão calórica desejada, você precisa queimar ${exercicio.toFixed(2)} kcal por dia com exercícios.`);
}
main()