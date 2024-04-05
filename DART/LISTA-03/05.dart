// Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança
// um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7
// ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é
// chamado de "craps" e você perdeu.
// Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10, este é seu "Ponto".
// Seu objetivo agora é continuar jogando os dados até tirar
// este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto
// novamente.

import 'dart:math';

void main(List<String> args) {
  int dadoUm = 0;
  int dadoDois = 0;
  int contador = 1;
  int ponto = 0;
  int somaDados = 0;

  while (true) {
    dadoUm = Random().nextInt(6) + 1;
    dadoDois = Random().nextInt(6) + 1;
    somaDados = dadoUm + dadoDois;
    print("Seus dados: $dadoUm e $dadoDois");
    print("Soma dos dados: $somaDados");

    if (contador == 1 && (somaDados == 7 || somaDados == 11)) {
      print("Você ganhou!");
      break;
    }

    if (contador == 1 && (somaDados == 2 || somaDados == 3 || somaDados == 12)) {
      print("Você perdeu!");
      break;
    }

    if (contador == 1 && (somaDados == 4 || somaDados == 5 || somaDados == 6 || somaDados == 8 || somaDados == 9 || somaDados == 10)) {
      ponto = somaDados;
      print("Parabéns, você marcou um ponto");
    } else if (contador > 1 && (ponto == somaDados)) {
      print("Parabéns, você marcou outro ponto!");
      print("Fim de jogo.");
      break;
    } else if (somaDados == 7) {
      print("Você perdeu!");
      break;
    } else {
      print("Você tirou $somaDados então não pode marcar um ponto.");
    }

    contador += contador;
  }
}