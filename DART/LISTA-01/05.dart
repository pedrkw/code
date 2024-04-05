// Faça um Programa que peça a temperatura em graus
// Celsius, transforme e mostre em graus Fahrenheit.

import 'dart:io';

void main(List<String> args) {
  print("Digite a temperatura em Celsius: ");
  String? input = stdin.readLineSync();
  double celsius = double.parse(input!);
  double fahrenheit = (celsius * 9 / 5) + 32;
  print("Convertido para fahrenheit: $fahrenheit °F");
}
