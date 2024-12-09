//Elabore um programa que mostre um menu de cadastro, exclusão, alteração e consulta de clientes
let clientes = [];

while (true) {
  console.log("Cadastro de clientes\n0 - Incluir\n1 - Alterar\n2 - Excluir\n3 - Consultar\n4 - Parar")
  let escolha = parseInt(prompt("Opção: "));
  switch (escolha) {
    case 0:
      let incluir = prompt("Digite o nome do cliente: ");
      clientes.push(incluir);
      console.log("Cliente cadastrado. \n");
      break;
    case 1:
      console.log("Lista de clientes cadastrados: ");
      for (let i = 0; i < clientes.length; i++) {
        console.log(`${[i]} - ${clientes[i]}`);
      }

      let escolhaAlterar = parseInt(prompt("Escolha o cliente que deseja alterar: "));
      if (typeof escolhaAlterar !== 'number' || isNaN(escolhaAlterar) || escolhaAlterar < 0 || escolhaAlterar >= clientes.length) {
        console.log("Escolha inválida.");
        break
      }
      let alterar = prompt("Digite o novo nome: ");
      clientes[escolhaAlterar] = alterar
      break;
    case 2:
      console.log("Lista de clientes cadastrados: ");
      for (let i = 0; i < clientes.length; i++) {
        console.log(`${[i]} - ${clientes[i]}`);
      }

      escolhaExluir = parseInt(prompt("Escolha o cliente que deseja excluir: "));
      if (typeof escolhaExluir == 'number' && isNaN(escolhaExluir) == 'false' ||) {
        clientes.pop(escolhaExluir);
        console.log("Cliente excluído com sucesso.")
      } else {
        console.log("Escolha inválida.");
        break;
      }
      break;
    case 3:
      console.log("Lista de clientes cadastrados: ");
      for (let i = 0; i < clientes.length; i++) {
        console.log(`${[i]} - ${clientes[i]}`);
      }
      if (clientes.length == 0) {
        console.log("Nenhum cliente cadastrado.\n")
      }
      break;
    default:
      break;
  }

  if (escolha === 4) {
    console.log("Programa interrompido.")
    break
  }
}