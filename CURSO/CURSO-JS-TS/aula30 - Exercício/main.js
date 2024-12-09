// function getDiaSemanaTexto(diaSemana) {
//   const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//   return dias[diaSemana] || '';
// }

// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function formataHora(data) {
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());
//   const seg = zeroAEsquerda(data.getSeconds());

//   return `${hora}:${min}:${seg}`
// }

// const data = new Date();
// const diaSemana = data.getDay();
// let diaSemanaTexto = getDiaSemanaTexto(diaSemana);
// const getDia = data.getDate();
// // const getMes = data.getMonth() + 1;
// const getMesPorExtenso = data.toLocaleString('pt-BR', { month: 'long' });
// const getAno = data.getFullYear();
// const getHora = formataHora(data);
// const dataCompleta = `${diaSemanaTexto}, ${getDia} de ${getMesPorExtenso} de ${getAno} as ${getHora} `;
// const mostrarData = document.getElementById("containerTexto");
// mostrarData.textContent = dataCompleta;

function getDiaSemanaTexto(diaSemana) {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  return dias[diaSemana] ?? '';
}

function zeroAEsquerda(num) {
  return String(num).padStart(2, '0');
}

function formataDataHora(data) {
  const diaSemanaTexto = getDiaSemanaTexto(data.getDay());
  const dia = data.getDate();
  const mesPorExtenso = data.toLocaleString('pt-BR', { month: 'long' });
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${diaSemanaTexto}, ${dia} de ${mesPorExtenso} de ${ano} às ${hora}:${min}:${seg}`;
}

document.getElementById("containerTexto").textContent = formataDataHora(new Date());