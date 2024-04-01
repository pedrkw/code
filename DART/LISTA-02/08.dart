// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor.
// Imprima a idade e a altura na ordem inversa a ordem lida.
import 'dart:io';

void main(List<String> args) {
  List<double> altura = [];
  List<int> idade = [];

  for (var i = 0; i < 5; i++) {
    stdout.write("Pessoa $i - Altura: ");
    double inputAltura = double.parse(stdin.readLineSync()!);
    altura.add(inputAltura);

    stdout.write("Pessoa $i - Idade: ");
    int inputIdade = int.parse(stdin.readLineSync()!);
    idade.add(inputIdade);
  }

  print(" ");
  for (var j = 4; j >= 0; j--) {
    stdout.write("Pessoa $j - Altura: ${altura[j]}\n");
    stdout.write("Pessoa $j - Idade: ${idade[j]}\n");
  }
}
