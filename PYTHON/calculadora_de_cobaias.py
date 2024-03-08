coelho = 0
rato = 0
sapo = 0

N = int(input("Quantos casos de testes serão digitados? "))

# vet: [int] = [0 for x in range(N)]
vet = [0 for x in range(N)]

for i in range(N):
    D = int(input("Quantidade de cobaias: "))
    tipo = input("Tipo de cobaia (C para coelho, R para rato, S para sapo): ").upper()

    if tipo == "C":
        coelho += D
    elif tipo == "R":
        rato += D
    elif tipo == "S":
        sapo += D

total = coelho + rato + sapo

print(f"Total de cobaias: {total}")
print(f"Coelhos: {coelho}")
print(f"Ratos: {rato}")
print(f"Sapos: {sapo}")
