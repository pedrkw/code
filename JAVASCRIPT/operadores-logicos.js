var a = 5;
var b = 10;
var c = 3;
var resultado = (a < b) && (b < c);
console.log(resultado);  // false

var idade = 25;
var possuiCarteira = true;
var podeDirigir = (idade >= 18) || possuiCarteira;
console.log(podeDirigir);  // true

var solBrilha = true;
var estaChovendo = !solBrilha;
console.log(estaChovendo);  // false