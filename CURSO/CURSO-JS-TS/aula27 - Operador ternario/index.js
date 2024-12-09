// (condição) ? 'valor para verdadeiro' : 'valor para falso';
const userPoints = 999;
const userLevel = userPoints >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(userLevel);

// const userColor = null;
const userColor = 'Pink';
const userDefault = userColor || 'Preto';

// if (userPoints >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }