// Faça um programa que use a função valorPagamento para determinar o valor a ser
// pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor
// da prestação e o número de dias em atraso e passar estes valores para a função
// valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa
// que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a
// execução o programa deverá voltar a pedir outro valor de prestação e assim continuar
// até que seja informado um valor igual a zero para a prestação. Neste momento o
// programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade
// e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da
// seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando
// houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.
import 'dart:io';

void main(List<String> args) {
  valorPagamento(double prestacao, int diasAtraso) {
    double prestacaoFinal = 0;
    double multa = 0;
    double juros = 0;

    if (diasAtraso == 0) {
      return prestacao;
    } else {
      multa = prestacao + (prestacao * 3) / 100;
      juros = multa * (0.1 / 100) * diasAtraso;
      prestacaoFinal = multa + juros;
      return prestacaoFinal;
    }
  }

  int contador = 0;
  double valorPrestacao = 0;
  double prestacoesTotal = 0;

  while (true) {
    contador += 1;
    
    stdout.write("Valor da prestação: ");
    double inputPrestacao = double.parse(stdin.readLineSync()!);

    stdout.write("Dias em atraso: ");
    int inputDiasAtraso = int.parse(stdin.readLineSync()!);

    valorPrestacao = valorPagamento(inputPrestacao, inputDiasAtraso);
    print("Valor a ser pago: ${valorPrestacao.toStringAsFixed(2)}");

    prestacoesTotal = prestacoesTotal + valorPrestacao;

    stdout.write("Deseja continuar ?\nDigite S de sim ou N de não: ");
    String inputContinuar = stdin.readLineSync()!.toUpperCase();
    if (inputContinuar == 'N') {
      print("Quantidade de prestações: $contador");
      print("Valor total das prestações: ${prestacoesTotal.toStringAsFixed(2)}");
      print("Parando o programa...");
      break;
    }
  }
}
