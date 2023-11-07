package Pessoas;

import java.util.Scanner;

public class Pessoas_Exec {
    public static void main(String[] args) {
        Pessoas pessoas = new Pessoas();
        Scanner number = new Scanner(System.in);
        Scanner text = new Scanner(System.in);

// Maneira utilzando o Scanner (Test mais Demorado)
        System.out.println("Digite seu nome: ");
        pessoas.setNome(text.nextLine());
        System.out.println("Digite sua idade: ");
        pessoas.setIdade(number.nextInt());
        System.out.println("Digite sua altura: ");
        pessoas.setAltura(number.nextDouble());
        System.out.print("Digite seu peso: ");
        pessoas.setPeso(number.nextDouble());

// Maneira sem utilizar o Scanner (Test mais r�pido)
//		pessoas.setAltura(1.75);
//		pessoas.setIdade(19);
//		pessoas.setNome("Jo�o Pedro");
//		pessoas.setPeso(74);

        pessoas.emagrecer();

        pessoas.engordar();
        pessoas.engordar();

        pessoas.envelhecer();




        System.out.println("Nome: " + pessoas.getNome());
        System.out.println("Idade: " + pessoas.getIdade());
        System.out.println("Altura: " + pessoas.getAltura());
        System.out.println("Peso: " + pessoas.getPeso());



    }

}