// Função para obter o maior e o menor número digitado

function pegarMenor (x, y, z) {
    if(x <= y && x <= z) {
        console.log(`O valor ${x} de X é o menor`);
    } else if(y <= x && y <= z) {
        console.log(`O valor ${y} de Y é o menor`);
    } else {
        console.log(`O valor ${z} de Z é o menor`)
    }
}

function pegarMaior (x, y, z) {
    if(x >= y && x >= z) {
        console.log(`O valor ${x} de X é o maior`);
    } else if(y >= x && y >= z) {
        console.log(`O valor ${y} de Y é o maior`);
    } else {
        console.log(`O valor ${z} de Z é o maior`);
    }
}

let v1 = parseInt(prompt("Digite um número: "));
let v2 = parseInt(prompt("Digite um número: "));
let v3 = parseInt(prompt("Digite um número: "));
pegarMenor(v1, v2, v3);
pegarMaior(v1, v2, v3);
// pegarMenor(3, 6, 10);
// pegarMaior(3, 6, 10);