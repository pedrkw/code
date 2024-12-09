package view;

import java.util.List;
import java.util.Scanner;

import model.Cliente;

public class ClienteView {
    Scanner sc = new Scanner(System.in);

    public int exibirMenu() {
        System.out.println("=== MENU ===");
        System.out.println("1 - Adicionar cliente: ");
        System.out.println("2 - Listar cliente: ");
        System.out.println("3 - Atualizar cliente: ");
        System.out.println("4 - Deletar cliente: ");
        System.out.println("5 - Sair ");
        System.out.println("Escolha uma opção: ");
        return sc.nextInt();
    }

    public Cliente cadastrarCliente() {
        System.out.println("=== Cadastro do Cliente ===");
        System.out.println("Digite o ID: ");
        int id = sc.nextInt();
        sc.nextLine();
        System.out.println("Digite o nome: ");
        String nome = sc.nextLine();
        System.out.println("Digite o E-mail: ");
        String email = sc.nextLine();
        return new Cliente(id, nome, email);
    }
    public void mostrarClientes(List<Cliente> clientes) {
        System.out.println("=== Lista de Clientes ===");
        if(clientes.isEmpty()) {
            System.out.println("Nenhum cliente encontrado");
        }else {
            for(Cliente cliente : clientes) {
                System.out.println("ID: " + cliente.getId()
                        + ", Nome: " + cliente.getNome() +
                        ", E-mail: " + cliente.getEmail());
            }
        }
    }
    public int obterIDCliente() {
        System.out.println("Digite o ID: ");
        return sc.nextInt();
    }

    public void mostrarMensagem(String mensagem) {
        System.out.println(mensagem);
    }

}