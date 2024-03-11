# Faça um Programa que leia 20 números inteiros e armazene-os num vetor.
# Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.
import random

# int_numbers = []
int_numbers = [random.randint(1, 100) for _ in range(20)]
even_numbers = []  # par
odd_numbers = []  # impar

for i in range(len(int_numbers)):
    if int_numbers[i] % 2 == 0:
        even_numbers.append(int_numbers[i])
    else:
        odd_numbers.append(int_numbers[i])

# int_str = ', '.join(int_numbers)
print(f"Valores dentro do vetor: {int_numbers}")
print(f"Valores impar: {odd_numbers}")
print(f"Valores par: {even_numbers}")