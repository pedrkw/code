/* 
&& > false && true > false
|| > true or false > true
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi () {
//   return 'Oi'
// }

// const vaiExecutar = true;

// console.log(vaiExecutar && falaOi());

// const corUsuario = null;
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
