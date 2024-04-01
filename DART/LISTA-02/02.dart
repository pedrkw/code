// Faça um programa que leia 5 números e informe o maior número.

void main(List<String> args) {
  int numeroUm = 10;
  int numeroDois = 32;
  int numeroTres = 47;
  int numeroQuatro = 14;
  int numeroCinco = 65;

  int maiorNumero = numeroUm;

  if (numeroDois > maiorNumero) {
    maiorNumero = numeroDois;
  }
  if (numeroTres > maiorNumero) {
    maiorNumero = numeroTres;
  }
  if (numeroQuatro > maiorNumero) {
    maiorNumero = numeroQuatro;
  }
  if (numeroCinco > maiorNumero) {
    maiorNumero = numeroCinco;
  }

  print("Maior número: $maiorNumero");
}