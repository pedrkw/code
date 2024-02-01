# Faça um Programa que peça dois números e imprima o maior deles.
numberOne = int(input("Digite um valor: "))
numberTwo = int(input("Digite outro valor: "))

if numberOne > numberTwo:
    print(f"{numberOne} é maior que {numberTwo}")
else:
    print(f"{numberTwo} é maior que {numberOne}")