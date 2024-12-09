// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 80 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1979 timestamp unix
const data = new Date(); // a, m, d, h, M, s, ms
// const data = new Date('2024-10-17T14:22:34'); // a, m, d, h, M, s, ms
console.log(data.toString());
console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1);
console.log('Ano: ', data.getFullYear());
console.log(data.getTime());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

// const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);