// Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a
// soma dos quadrados dos elementos do vetor.

void main(List<String> args) {
  List<int> numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  int soma = 0;
  int resultado = 0;
  for (var i = 0; i < 10; i++) {
    soma = numeros[i] * numeros[i];
    resultado += soma;
  }
  print("Soma dos quadrados: $resultado");
}