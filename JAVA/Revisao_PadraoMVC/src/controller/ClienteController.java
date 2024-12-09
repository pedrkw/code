package controller;

import view.ClienteView;

import java.util.ArrayList;
import java.util.List;
import model.Cliente;

public class ClienteController {
    private List<Cliente> clientes;
    private ClienteView view;

    public ClienteController(ClienteView view) {
        this.clientes = new ArrayList<>();
        this.view = view;
    }

    public void iniciar() {
        int opcao;
        do {
            opcao = view.exibirMenu();
            switch(opcao) {
                case 1:
                    adicionarCliente();
                    break;
                case 2:
                    listarCliente();
                    break;
                case 3:
                    atualizarCliente();
                    break;
                case 4:
                    deletarCliente();
                    break;
                case 5:
                    view.mostrarMensagem("Saindo do sistema...");
                    break;
                default:
                    view.mostrarMensagem("Opção inválida.");
            }
        }while(opcao != 5);
    }

    public void adicionarCliente() {
        Cliente cliente = view.cadastrarCliente();
        clientes.add(cliente);
        view.mostrarMensagem("Cliente cadastrado com sucesso!");
    }

    public void listarCliente() {
        view.mostrarClientes(clientes);
    }

    public void atualizarCliente() {
        int id = view.obterIDCliente();
        for(Cliente cliente :  clientes) {
            if(cliente.getId() == id) {
                Cliente novoCliente = view.cadastrarCliente();
                cliente.setNome(novoCliente.getNome());
                cliente.setEmail(novoCliente.getEmail());
                view.mostrarMensagem("Cliente atualizado com sucesso!");
            }else {
                view.mostrarMensagem("Cliente não encontrado.");
            }
        }
    }
    public void deletarCliente() {
        int id = view.obterIDCliente();
        Cliente cliente = buscarClientePorId(id);
        if (cliente != null) {
            clientes.remove(cliente);
            view.mostrarMensagem("Cliente removido com sucesso!");
        } else {
            view.mostrarMensagem("Cliente não encontrado.");
        }
    }
    private Cliente buscarClientePorId(int id) {
        for (Cliente cliente : clientes) {
            if (cliente.getId() == id) {
                return cliente;
            }
        }
        return null;
    }
}