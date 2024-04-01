// Faça um programa que leia 5 números e informe a soma e a média dos números.

void main(List<String> args) {
  int numeroUm = 10;
  int numeroDois = 32;
  int numeroTres = 47;
  int numeroQuatro = 14;
  int numeroCinco = 65;

  int soma = numeroUm + numeroDois + numeroTres + numeroQuatro + numeroCinco;
  double media = (numeroUm + numeroDois + numeroTres + numeroQuatro + numeroCinco) / 5;

  print("Resultado da soma: $soma");
  print("Resultado da média: $media");
}