// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

void main(List<String> args) {
  String resultado = '';

  for (var i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
      resultado += '$i' ', ';
    }
  }

  print("Números impares: $resultado");
}