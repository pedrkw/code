package revisao;

import java.util.Scanner;

public class Calc_exec {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Calc calc = new Calc();
		double n1, n2;
		
		/*calc.soma();
		calc.divisao();
		calc.multiplicacao();
		calc.subtracao();*/
		
		System.out.println("Digite um valor: ");
		n1 = sc.nextDouble();

		System.out.println("Digite um valor");
		n2 = sc.nextDouble();
		
		
		System.out.println("Soma: "+calc.soma(n1, n2));
		System.out.println("Subtração: "+calc.subtracao(n1, n2));
		System.out.println("Multiplicação: "+calc.multiplicacao(n1, n2));
		System.out.println("Divisão: "+calc.divisao(n1, n2));
	}

}
