// Faça um Programa que peça a temperatura em graus
// Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).
import 'dart:io' as io;

void main(List<String> args) {
  print("Digite a temperatura em Fahrenheit: ");
  String? input = io.stdin.readLineSync();
  double fahrenheit = double.parse(input!);
  double celsius = 5 * ((fahrenheit - 32) / 9);
  print("Convertido para Celsius: $celsius °C");
}
