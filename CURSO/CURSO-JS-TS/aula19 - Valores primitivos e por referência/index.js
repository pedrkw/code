/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigInt, symbol)
Valor imutável

Referência (mutável) - array, object, function
Valor mutável
*/

//string
let a = 'A';
let b = a;
console.log(a, b);

a = 'C';
console.log(a, b, '\n');

//number
let c = 1;
let d = c;
console.log(c, d);

c = 2;
console.log(c, d, '\n');

//boolean
let e = true;
let f = e;
console.log(e, f);

e = false;
console.log(e, f, '\n');

//

let h = [1, 2];
let i = h;
console.log(h, i);

h.push(3);
console.log(h, i)