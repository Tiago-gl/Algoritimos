//25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo 
//deve escrever uma mensagem de permissão de acesso ou não.

import { question } from "readline-sync";

//Entrada
const senha = question('Digite sua senha de quatro digitos: ')

//Processamento e saida
if (senha == 1234) {
    console.log('Senha aprovada. Bem vindo!')
}
else{
    console.log('Senha incorreta, por favor tente novamente!')
}