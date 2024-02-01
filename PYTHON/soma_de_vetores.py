N = int(input("Quantos valores cada vetor vai ter? "))
vet: [int] = [0 for x in range(N)]
vet2: [int] = [0 for x in range(N)]

for i in range (0, N):
    vet[i] = float(input("Digite os valores do vetor A: "))

print()

for i in range (0, N):
    vet2[i] = float(input("Digite os valores do vetor B: "))

print("Vetor resultante: ")

for a in range (N):
    print(vet[a] + vet2[a])