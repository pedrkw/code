# Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
sex = input("Digite M para Masculino ou F para Feminino: ")

if sex == "M":
    print("Sexo: masculino")
elif sex == "F":
    print("Sexo: feminino")
else:
    print("Sexo inválido")