// Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro
// vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos
// intercalados dos dois outros vetores.

void main(List<String> args) {
  List<int> numerosUm = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  List<int> numerosDois = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  List<int> numerosTres = [];

  for (var i = 0; i < 10; i++) {
    numerosTres.add(numerosUm[i]);
    numerosTres.add(numerosDois[i]);
  }
  
  print("Terceiro vetor: $numerosTres"); 
}