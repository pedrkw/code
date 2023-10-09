var idade = 24;
var possuiCarteira = false;
var podeDirigir = (idade >= 18) && possuiCarteira;
console.log(podeDirigir);  // true

var idade = 25;
var podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir);  // 'Pode dirigir'