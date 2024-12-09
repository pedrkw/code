import java.util.Random;

public class CrapsGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int dadoUm, dadoDois, contador = 0, ponto = 0, somaDados;

        while (true) {
            contador++;
            System.out.println("Rodada: " + contador);
            System.out.println("Lançando dados...");

            dadoUm = rand.nextInt(6) + 1;
            dadoDois = rand.nextInt(6) + 1;
            somaDados = dadoUm + dadoDois;

            System.out.println("Seus dados: " + dadoUm + " e " + dadoDois);
            System.out.println("Soma dos dados: " + somaDados);

            if (contador == 1 && (somaDados == 7 || somaDados == 11)) {
                System.out.println("Você ganhou!");
                break;
            }

            if (contador == 1 && (somaDados == 2 || somaDados == 3 || somaDados == 12)) {
                System.out.println("Você perdeu!");
                break;
            }

            if (contador == 1) {
                ponto = somaDados;
                System.out.println("Parabéns, você marcou um ponto!");
            } else if (contador > 1 && ponto == somaDados) {
                System.out.println("Parabéns! Você marcou mais um ponto e ganhou o jogo!");
                System.out.println("Fim de jogo.");
                break;
            } else if (somaDados == 7) {
                System.out.println("Você perdeu!");
                break;
            } else {
                System.out.println("Você não pontuou desta vez, pois obteve um total de " + somaDados +
                        " e seu ponto atual é " + ponto + ".");
            }
        }
    }
}