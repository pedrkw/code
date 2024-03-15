# Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
import random
import string

vowel_list = ['a', 'e', 'i', 'o', 'u']
char_list = []
for _ in range(10):
    char_list.append(random.choice(string.ascii_lowercase))

consonant_list = []
count = 0

for i in range(len(char_list)):
    if not char_list[i] in vowel_list:
        consonant_list.append(char_list[i])

consonant_str = ', '.join(consonant_list)
char_str = ', '.join(char_list)
print(f"O vetor possui os seguintes caracteres: {char_str}\nO vetor tem {len(consonant_list)} consoantes e são as seguintes: {consonant_str}")