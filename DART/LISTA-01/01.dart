// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
import 'dart:io' as io;

void main() {
  print("Digite o raio do circulo: ");
  String? input = io.stdin.readLineSync();
  double raio = double.parse(input!);
  double area = 3.14 * raio * raio;
  print("A área do circulo é: ${area.toStringAsFixed(2)}");
}