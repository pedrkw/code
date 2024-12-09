package controller;

import model.Produtos;
import view.ProdutosView;

import java.util.ArrayList;
import java.util.List;

public class ProdutoController {
    private List<Produtos> produto;
    private ProdutosView view;

    public ProdutoController(ProdutosView view) {
        this.produto = new ArrayList<>();
        this.view = view;
    }

    public void iniciar() {
        int escolha;
        do {
            escolha = view.mostrarMenu();
            switch (escolha) {
                case 1:
                    adicionarProduto();
                    break;
                case 2:
                    exibirProdutos();
                    break;
                case 3:
                     view.exibirMensagem("Fechando sistema...");
                     break;

                default:
                    view.exibirMensagem("Opção inexistente!");
            }
        }while (escolha != 3);
    }

    public void adicionarProduto() {
        Produtos produtos = view.cadastrarProduto();
        produto.add(produtos);
        view.exibirMensagem("Produto cadastrado com sucesso!");
    }

    public void exibirProdutos() {
        view.listarProdutos(produto);
    }
}
