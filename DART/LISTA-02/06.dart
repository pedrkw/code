// Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num
// vetor a média de cada aluno, imprima o número de alunos com média maior ou igual
// a 7.0.
import 'dart:io';

void main(List<String> args) {
  List<double> mediasDosAlunos = [];

  for (int aluno = 1; aluno <= 10; aluno++) {
    print("Digite as notas do aluno $aluno:");

    List<double> notasDoAluno = [];

    for (int nota = 1; nota <= 4; nota++) {
      stdout.write("Nota $nota: ");
      double notaDigitada = double.parse(stdin.readLineSync()!);
      notasDoAluno.add(notaDigitada);
    }

    double mediaDoAluno = calcularMedia(notasDoAluno);
    mediasDosAlunos.add(mediaDoAluno);
  }

  int mediaIgualSete = 0;
  for (double media in mediasDosAlunos) {
    if (media >= 7.0) {
      mediaIgualSete++;
    }
  }

  print(
      "Número de alunos com média maior ou igual a 7.0: $mediaIgualSete");
}

double calcularMedia(List<double> notas) {
  double soma = 0;
  for (double nota in notas) {
    soma += nota;
  }
  return soma / notas.length;
}
