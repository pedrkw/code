// Reverso do número. Faça uma função que retorne o reverso de um número inteiro
// informado. Por exemplo: 127 -> 721.

import 'dart:io';

void main(List<String> args) {
  while (true) {
    try {
      stdout.write("Digite um número inteiro: ");
      int inputNumero = int.parse(stdin.readLineSync()!);

      int numeroInvertido =
          int.parse(inputNumero.toString().split('').reversed.join());
      print("Número invertido: $numeroInvertido");
      break;
    } catch (e) {
      print("Entrada inválida. Por favor, digite um número inteiro.");
    }
  }
}
