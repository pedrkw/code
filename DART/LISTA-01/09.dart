// Faça um Programa que leia três números e mostre-os em ordem decrescente

import 'dart:io';

void main() {
  print('Digite o primeiro número:');
  int num1 = int.parse(stdin.readLineSync()!);

  print('Digite o segundo número:');
  int num2 = int.parse(stdin.readLineSync()!);

  print('Digite o terceiro número:');
  int num3 = int.parse(stdin.readLineSync()!);

  int maior = num1;
  if (num2 > maior) maior = num2;
  if (num3 > maior) maior = num3;

  int menor = num1;
  if (num2 < menor) menor = num2;
  if (num3 < menor) menor = num3;

  int meio = num1 + num2 + num3 - maior - menor;

  print('Os números em ordem decrescente são: $maior, $meio, $menor');
}
