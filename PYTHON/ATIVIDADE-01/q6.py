# Faça um Programa que peça dois números e imprima o maior deles.
number_one = int(input("Digite um valor: "))
number_two = int(input("Digite outro valor: "))

if number_one > number_two:
    print(f"{number_one} é maior que {number_two}")
else:
    print(f"{number_two} é maior que {number_one}")