var n1 = 2;
var n2 = 3;
var n3 = '4';
var r1 = n1 < n2; // true
var r2 = n1 > n2; // false
var r3 = n1 <= n2; // true
var r4 = n1 >= n2; //false
var r5 = n2 == n3; // true
var r6 = n2 === n3; // false
var r7 = n2 !== n3; // true
var r8 = n2 != n3; //true

console.log(`R1/2 - Resultado 1 (n1 < n2): ${r1}\nResultado 2 (n1 > n2): ${r2}`);
console.log(`R3/4 - Resultado 1 (n1 <= n2): ${r3}\nResultado 2 (n1 => n2): ${r4}`);
console.log(`R5 - As variáveis n2 e n3 tem valores iguais ? ${r5}`);
console.log(`R6 - As variáveis n2 e n3 tem valores e tipos iguais ? ${r6}`);
console.log(`R7 - As variáveis n2 e n3 são diferentes em valores e tipos ? ${r7}`);
console.log(`R8 - As variáveis n2 e n3 tem valores diferentes ? ${r8}`);