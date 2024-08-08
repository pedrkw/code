// const pessoa = {
//   nome: 'Pedro',
//   sobrenome: 'Jorge',
//   idade: 20
// };

//criar um objeto
//const object = {};

// console.log(pessoa.nome);

// function createPerson(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade
//   };
// };

function createPerson(nome, sobrenome, idade) {
  // return {
  //   nome: nome,
  //   sobrenome: sobrenome,
  //   idade: idade
  // };
  const person = {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
  // const personReturn = console.log(person);
  const personArray = [person];
  console.log(personArray)
  // personArray = personReturn;
  // return {
  //   pessoaRetorno
  // };
};

// function createPerson(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,

//     speak() {
//       console.log(`Meu nome é ${this.nome} ${this.sobrenome}.`);
//     }
//   };
// };

const person = createPerson('pedro', 'jorge', 20);
const person2 = createPerson('maria', 'helena', 67)
const person3 = createPerson('rox', 'midus', 29)
const person4 = createPerson('jubirildo', 'silva', 38)
const person5 = createPerson('ronaldo', 'silva', 22)
// const personArray = [createPerson.personReturn];
// console.log(createPerson.personArray)

// console.log(createPerson)
// const array = [person];
// array = createPerson;
// console.log("Valores do array" + array);

// person.speak();
// console.log(person)
// console.log(person.nome)

// const person2 = createPerson('joao', 'pedro', 20)
// console.log(person2)
// console.log(person2.nome)

// const person3 = createPerson('francisco', 'ronaldo', 21)
// console.log(person3)
// console.log(person3.nome)