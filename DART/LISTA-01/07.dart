// Faça um Programa que leia três números e mostre o maior e o menor deles.
import 'dart:io' as io;

void main(List<String> args) {
  print("Digite o valor um: ");
  String? input = io.stdin.readLineSync();
  double um = double.parse(input!);

  print("Digite o valor dois: ");
  String? inputD = io.stdin.readLineSync();
  double dois = double.parse(inputD!);

  print("Digite o valor três: ");
  String? inputT = io.stdin.readLineSync();
  double tres = double.parse(inputT!);

  if (um > dois && um > tres) {
    print("O maior valor é: $um");
  } else if (dois > um && dois > tres) {
    print("O maior valor é: $dois");
  } else {
    print("O maior valor é: $tres");
  }

  if (um < dois && um < tres) {
    print("O menor valor é: $um");
  } else if (dois < um && dois < tres) {
    print("O menor valor é: $dois");
  } else {
    print("O menor valor é: $tres");
  }
}
