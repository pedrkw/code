// Faça um programa que receba dois números inteiros e gere os 
// números inteiros que estão no intervalo compreendido por eles.

void main(List<String> args) {
  int numeroUm = 54;
  int numeroDois = 74;
  String intervalo = '';

  for (var i = numeroUm + 1; i < numeroDois; i++) {
    intervalo += '$i' ' ';
  }

  print("Intervalo entre $numeroUm e $numeroDois:\n$intervalo");
}