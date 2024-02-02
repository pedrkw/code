# Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
number = int(input("Digite um número entre zero e dez: "))

# while not (0 <= number <= 10):
while not (0 <= number and number <= 10):
    print("Número inválido. Digite apenas números entre zero e dez!")
    number = int(input("Digite um número entre zero e dez: "))
