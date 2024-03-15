# Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
login = input("Digite um nome de usuário: ")
password = input("Digite uma senha: ")

while (password == login):
    print("Usuário e senha iguais. Por favor, tente novamente.")
    login = input("Digite um nome de usuário: ")
    password = input("Digite uma senha: ")