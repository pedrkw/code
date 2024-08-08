function myScope() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  const people = [];

  function eventForm(event) {
    event.preventDefault();

    const name = form.querySelector('.name');
    const lastName = form.querySelector('.lastName');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    const person = {
      nome: name.value,
      sobrenome: lastName.value,
      peso: weight.value,
      altura: height.value
    };

    people.push(person)
    console.log(people)
    result.innerHTML += `<p>Nome: ${name.value} Sobrenome: ${lastName.value} Peso: ${weight.value} Altura: ${height.value}</p>`;
  }

  form.addEventListener('submit', eventForm);
}

myScope();