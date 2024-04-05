// Faça um Programa que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

import 'dart:io';

void main(List<String> args) {
  print("Digite seu ganho por hora: ");
  String? input = stdin.readLineSync();
  double ganhoHora = double.parse(input!);

  print("Digite quantas horas você trabalha no mês: ");
  String? input2 = stdin.readLineSync();
  double horaMes = double.parse(input2!);
  
  double salario = ganhoHora * horaMes;
  print("Você ganha ${salario.toStringAsFixed(2)} por mês");
}
