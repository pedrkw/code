// Faça um Programa que pergunte em que turno você estuda. Peça para digitar
// M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa
// Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
import 'dart:io' as io;

void main(List<String> args) {
  print("Digite o turno em que você estuda");
  print("M-matutino ou V-Vespertino ou N-Noturno (apenas a letra): ");
  String? input = io.stdin.readLineSync();
  String inputMaiusculo = input!.toUpperCase();

  if (inputMaiusculo == 'M') {
    print("Bom dia!");
  } else if (inputMaiusculo == 'V') {
    print("Boa tarde!");
  } else if (inputMaiusculo == 'N') {
    print("Boa noite!");
  } else {
    print("Entrada inválida!");
  }
}
