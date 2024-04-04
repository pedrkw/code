// Faça uma função que informe a quantidade de dígitos de um determinado número
// inteiro informado.

import 'dart:io';

void main(List<String> args) {
  contarDigitos(int numero) {
    int qtdeDigitos = 0;
    String numeroString = numero.toString();
    for (var i = 0; i < numeroString.length; i++) {
      qtdeDigitos += 1;
    }

    return qtdeDigitos;
  }

  while (true) {
    try {
      stdout.write("Digite um número inteiro: ");
      int inputNumero = int.parse(stdin.readLineSync()!);

      print(("Quantidade de digitos: ${contarDigitos(inputNumero)}"));
      break;
    } catch (e) {
      print("Entrada inválida. Por favor, digite um número inteiro.");
    }
  }
}
