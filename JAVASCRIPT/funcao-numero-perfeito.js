function numeroPerfeito(num) {
    let somaDivisores = 0;
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            somaDivisores = somaDivisores + i;
        }
    }
    return somaDivisores === num;
}

let numTeste = parseInt(prompt("Digite um número: "));
if(numeroPerfeito(numTeste)) {
    console.log(`${numTeste} é um número perfeito.`);
} else {
    console.log(`${numTeste} não é um número perfeito.`);
}