// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a
// multiplicação e os números.

import 'dart:math';

void main(List<String> args) {
  // List<int> vetor = [1, 1, 1, 1, 1];
  List<int> vetor = List.generate(5, (index) => Random().nextInt(10) + 1);

  int soma = 0;
  int multiplicacao = 1;
  for (var i = 0; i < vetor.length; i++) {
    soma += vetor[i];
    multiplicacao *= vetor[i];
  }

  print("Números: $vetor");
  print("Soma: $soma");
  print("Multiplicação: $multiplicacao");
}
