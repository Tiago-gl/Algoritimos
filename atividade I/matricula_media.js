//Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
//matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

import { question } from "readline-sync";

//Entrada
let matricula, nota1, nota2, nota3;
let aprovados = 0, reprovados = 0, totalAlunos = 0;

//processamento
do {
  matricula = parseInt(question("Digite a matrícula do aluno (0 para encerrar):"));
  
  if (matricula !== 0) {
    nota1 = parseFloat(question("Digite a nota 1 do aluno:"));
    nota2 = parseFloat(question("Digite a nota 2 do aluno:"));
    nota3 = parseFloat(question("Digite a nota 3 do aluno:"));

    const mediaFinal = (2 * nota1) + (3 * nota2) + (5 * nota3);

    if (mediaFinal >= 7) {
      aprovados++;
    } else {
      reprovados++;
    }

    totalAlunos++;
  }

} while (matricula !== 0);

console.log(`Total de alunos: ${totalAlunos}\nAprovados: ${aprovados}\nReprovados: ${reprovados}`);