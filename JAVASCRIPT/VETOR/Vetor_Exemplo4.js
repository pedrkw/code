var lista = [];
lista.push("arroz");
lista.push("feijão");
lista.push("carne");
lista.push("macarrão");
lista.push("farofa")
console.log(lista)
var posicao = lista.indexOf("feijão");
console.log(posicao)
lista.splice(posicao,1);
console.log(lista);
lista.splice(posicao,2)
console.log(lista)