import { question } from "readline-sync";

//Entrada
function main() {
    var anos = question('Digite a duração do curso em anos: ')
    var valor = question('Digite o valor da mensalidade: ')
    var taxa = question('Digite sua renda per capita da seguinda forma: 1 se for de 0 a 1,5 salario minimo. 2 se for de 1,5 a 2. 3 se for de 2 a 2,5 e 4 se for 2,5 ou acima: ')
    var renda = question('Digite sua renda (R$): ')
    var familia = question('Digite quantas pessoas tem na sua familia: ')
    var inicio = question('Digite o ano e semestre de inicio: ')
    var jurosF = juros(anos, valor,taxa, renda)
    console.log(jurosF)
    var carenciaF = carencia(anos, inicio)
    console.log(carenciaF)
    var aprovadoF = aprovado(renda, familia)
    console.log(aprovadoF)
    var valorF = valores(carencia, juros)
    console.log(valorF)
}
main()
//Processamento
function juros (anos, valor, taxa, renda) {
    if (taxa == 1) {
        var taxa = 0.10
    }
    else if (taxa == 2) {
        var taxa = 0.15
    }
    else if (taxa == 3) {
        var taxa = 0.20
    }
    else if (taxa == 4) {
        var taxa = 0.25
    }
    else {
        console.log('Use somente os digitos "1, 2, 3 e 4" para escolher.')
    }
    
    var jurosAcumulados = 0;
    for (var i = 1; i <= anos; i++) {
        jurosAcumulados += valor * taxa
    }

    var valorTotal = valor * (taxa * anos)
    return valorTotal, jurosAcumulados
}

function carencia (anos, inicio) {
    var meses = anos * 12
    var mesesJuros = 0
    for (var i = 3; i <= meses; i++) {
        var mesesJuros = 150 * i
    }
    return mesesJuros
}
function aprovado (renda, familia) {
    var rendaPorPessoa = renda / familia
    var requisito = 2000
    if (rendaPorPessoa < requisito) {
        console.log('Você foi aprovado no FIES, Parabens!')
    }
    else {
        console.log('Você não foi aprovado no FIES devido sua renda por pessoa ser muito alta.')
    }
}
function valores(carencia, juros) {
    var total = valorTotal - mesesJuros
    var parcela = total / meses
    return total, parcela
}