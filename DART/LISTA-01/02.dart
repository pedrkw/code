// Faça um Programa que calcule a área de um quadrado, em seguida
// mostre o dobro desta área para o usuário.
import 'dart:io' as io;

void main(List<String> args) {
  print("Digite o lado do quadrado: ");
  String? input = io.stdin.readLineSync();
  int lado = int.parse(input!);
  int area = (lado * lado) * 2;
  print("Área do quadrado: $area");
}
