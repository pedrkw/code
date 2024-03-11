# Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vector_2 = []

for i in range(len(vector) - 1, -1, -1):
    vector_2.append(vector[i])

print(vector_2)