# Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
import sys

vowels = ["A", "E", "I", "O", "U"]

textInput = input("Digite uma letra: ")

if len(textInput) > 1:
    print("Digite apenas uma letra!")
    sys.exit()

if textInput.upper() in vowels:
    print("É uma vogal")
else:
    print("É uma consoante")