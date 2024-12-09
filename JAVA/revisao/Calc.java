package revisao;

public class Calc {
	//double n1 = 698;
	//double n2 = 542;
	double resultado;
	
	double soma(double n1, double n2) {
		resultado = n1+n2;
		return resultado;
	}
	
	double subtracao(double n1, double n2) {
		resultado = n1-n2;
		return resultado;
	}
	
	double multiplicacao(double n1, double n2) {
		resultado = n1*n2;
		return resultado;
	}
	
	double divisao(double n1, double n2) {
		resultado = n1/n2;
		return resultado;
	}
	
	/*void soma() {
		resultado = n1+n2;
		System.out.println("Soma: "+resultado);
	}
	
	void subtracao() {
		resultado = n1-n2;
		System.out.println("Subtração: "+resultado);
	}
	
	void multiplicacao() {
		resultado = n1*n2;
		System.out.println("Multiplicação: "+resultado);
	}
	
	void divisao() {
		resultado = n1/n2;
		System.out.println("Divisão: "+resultado);
	}*/
}
