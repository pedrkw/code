# Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, gendero Inválido.
gender = input("Digite M para Masculino ou F para Feminino: ")

if (gender == "M"):
    print("gendero: masculino")
elif (gender == "F"):
    print("gendero: feminino")
else:
    print("gendero inválido")