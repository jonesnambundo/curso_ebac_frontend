"use strict";

// Criar array de objetos com nome e nota de alunos
var alunos = [{
  nome: 'Aluno1',
  nota: 7
}, {
  nome: 'Aluno2',
  nota: 5
}, {
  nome: 'Aluno3',
  nota: 8
}, {
  nome: 'Aluno4',
  nota: 4
}, {
  nome: 'Aluno5',
  nota: 6
}];

// Criar função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamar a função e armazenar o resultado em uma variável
var alunosAprovados = filtrarAlunosAprovados(alunos);

// Imprimir os alunos aprovados
console.log('Alunos Aprovados:');
console.log(alunosAprovados);