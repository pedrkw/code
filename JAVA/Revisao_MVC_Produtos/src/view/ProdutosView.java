package view;

import model.Produtos;

import java.util.List;
import java.util.Scanner;

public class ProdutosView {
    Scanner sc = new Scanner(System.in);

    public int mostrarMenu(){
        System.out.println("--- DIGITE UM NÚMERO ---");
        System.out.println("1 - Cadastrar produto");
        System.out.println("2 - Listar produtos");
        System.out.println("3 - Sair");
        return sc.nextInt();
    }

    public Produtos cadastrarProduto() {
        System.out.println("--- CADASTRO DE PRODUTOS ---");
        System.out.println("Digite o id do produto: ");
        int id = sc.nextInt();
        sc.nextLine();
        System.out.println("Digite o nome do produto: ");
        String nome = sc.nextLine();
        System.out.println("Digite o preco do produto: ");
        double preco = sc.nextDouble();
        sc.nextLine();
        return new Produtos(id, nome, preco);
    }

    public void listarProdutos(List<Produtos> produtos) {
        System.out.println("--- LISTA DE PRODUTOS ---");
        if (produtos.isEmpty()) {
            System.out.println("Nenhum produto cadastrado.");
        } else {
            for (Produtos produto : produtos) {
                System.out.println("ID: " + produto.getId() + " Nome: " + produto.getNome() + " Preço: " + produto.getPreco());
            }
        }
    }

    public void exibirMensagem(String mensagem) {
        System.out.println(mensagem);
    }
}
