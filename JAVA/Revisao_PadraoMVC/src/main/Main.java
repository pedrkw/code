package main;
import view.ClienteView;
import controller.ClienteController;
public class Main {

    public static void main(String[] args) {
        ClienteView clienteView = new ClienteView();
        ClienteController clienteController = new ClienteController(clienteView);
        clienteController.iniciar();
    }
}
