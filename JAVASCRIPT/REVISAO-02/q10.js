//Crie um programa em JavaScript que simule um jogo de adivinhação. O computador deve escolher aleatoriamente um número entre 1 e 100, e o jogador deve tentar adivinhar qual é esse número. O programa deve fornecer dicas ao jogador, indicando se o número é maior ou menor do que a tentativa atual. O jogo deve continuar até que o jogador adivinhe corretamente o número.
let escolha;
let numero = 0;

// Função para gerar um número inteiro aleatório entre min e max
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

numero = numeroAleatorio(1, 100);

// console.log(numero);

while(escolha != numero) {
  escolha = parseInt(prompt("Adivinhe um número entre 1 e 100: "))
  
  if (escolha < numero) {
    console.log("Quase lá! Escolha um número maior");
  } else if (escolha > numero) {
    console.log("Quase lá! Escolha um número menor");
  } else {
    console.log(`Parabéns! Você acertouo número é ${escolha}`)
  }
}