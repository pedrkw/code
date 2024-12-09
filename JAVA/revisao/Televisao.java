package revisao;

public class Televisao extends Produto {
	private int polegadas;
	private boolean smart;
	private int volume = 100;

	void ligar() {
		System.out.println("TV Ligada.");
	}

	void MudarCh(int canal) {
		return canal;
	}

	void diminuirVol() {
		if (volume <= 0) {
			return volume;
		} else {
			return volume - 5;
		}
	}

	void aumentarVol() {
		return volume + 5;
	}

}
