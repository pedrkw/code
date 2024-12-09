package main;

import controller.ProdutoController;
import view.ProdutosView;

public class Main {
    public static void main(String[] args) {
        ProdutosView produtosView = new ProdutosView();
        ProdutoController produtoController = new ProdutoController(produtosView);
        produtoController.iniciar();
    }
}