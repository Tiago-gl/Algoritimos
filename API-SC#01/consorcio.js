import { question } from "readline-sync";

//Entrada
var valor = Number(question('Digite o valor do bem: '))
var prazo = Number(question('Digite o prazo desejado: '))
var taxa = Number(question('Digite o taxa de administracao: '))
var lance = Number(question('Digite o lance desejado: '))
var manter = question('Digite qual deseja manter, "prazo" ou "parcela": ')
var renda = Number(question('Digite sua renda mensal: '))

//Processamento
var porcentagemTaxa = taxa / 100
var valorTaxa = valor * porcentagemTaxa
var valorTotal = valor + valorTaxa
var valorPrazo = valorTotal / prazo
var requisito = renda * 0.30

if (valorPrazo > requisito) {
    console.log("--------------------------------------------------------")
    console.log("Seu resgate não foi aceito. para resgatar sua parcela não deve ser maior que 30% da sua renda.")
}
else {
    console.log("--------------------------------------------------------")
    console.log("Seu resgate foi aceito. Parabens!")
}
if (lance >= 5000) {
    var valorTotalNovo = valorTotal - lance
    var novoValorPrazo = valorTotalNovo / prazo
    var novoPrazo = prazo - 10
}

//Saida
console.log(`O valor das parcelas com o prazo escolhido é de ${valorPrazo.toFixed(2)} R$`)
console.log(`O valor total do bem é de: ${valorTotal.toFixed(2)} R$`)
console.log(`O valor da taxa é de: ${valorTaxa.toFixed(2)} R$`)

if (lance >= 5000) {
    console.log("--------------------------------------------------------")
    console.log('Seu lance foi aceito, Parabens!')
    console.log(`O valor do bem com o lance é de ${valorTotalNovo.toFixed(2)} R$`)
    if (manter == 'prazo') {
        console.log(`Sua nova parcela é de: ${novoValorPrazo.toFixed(2)} R$`)
    }
    else if (manter == 'parcela') {
        console.log(`Seu novo prazo agora é de: ${novoPrazo} parcelas com o mesmo valor.`)
    }
    else {
        console.log('Escolha somente entre "prazo" ou "parcela"')
    }
    if (novoValorPrazo > requisito) {
        console.log('Seu resgate não foi aceito. para resgatar sua parcela não deve ser maior que 30% da sua renda')
    }
    else {
        console.log('Seu resgate foi aceito. Parabens!')
    }
}
else {
    console.log('Seu lance não foi aceito.')
}