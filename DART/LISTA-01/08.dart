// Faça um programa que pergunte o preço de três produtos e informe qual produto você
// deve comprar, sabendo que a decisão é sempre pelo mais barato.

import 'dart:io';

void main(List<String> args) {
  print("Digite o nome do produto um: ");
  String? inputNomeUm = stdin.readLineSync();

  print("Digite o preço do produto um: ");
  String? inputPrecoUm = stdin.readLineSync();
  double precoUm = double.parse(inputPrecoUm!);

  print("Digite o nome do produto dois: ");
  String? inputNomeDois = stdin.readLineSync();

  print("Digite o preço do produto dois: ");
  String? inputPrecoDois = stdin.readLineSync();
  double precoDois = double.parse(inputPrecoDois!);

  print("Digite o nome do produto três: ");
  String? inputNomeTres = stdin.readLineSync();

  print("Digite o preço do produto três: ");
  String? inputPrecoTres = stdin.readLineSync();
  double precoTres = double.parse(inputPrecoTres!);
  
  if (precoUm < precoDois && precoUm < precoTres) {
    print(
        "O produto mais barato é o $inputNomeUm custando R\$ ${precoUm.toStringAsFixed(2)}");
  } else if (precoDois < precoUm && precoDois < precoTres) {
    print(
        "O produto mais barato é o $inputNomeDois custando R\$ ${precoDois.toStringAsFixed(2)}");
  } else {
    print(
        "O produto mais barato é o $inputNomeTres custando R\$ ${precoTres.toStringAsFixed(2)}");
  }

}
