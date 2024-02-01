total, rato, sapo, coelho = 0, 0, 0, 0

N = int(input("Quantos casos de testes serao digitados ? "))
vet: [int] = [0 for x in range(N)]

print("Coelho: C\nRato: R\nSapo: S")
for i in range(N):
    D = int(input("Quantidade de cobaias: "))
    Tipo = input("Tipo de cobaia: ")
    total += int(D)
    if Tipo == "C":
        coelho += int(D)
    elif Tipo == "R":
        rato += int(D)
    elif Tipo == "S":
        sapo += int(D)

print()

print("Total: %d cobaias" % total)
print("Total de coelhos: %d" % coelho)
print("Total de ratos: %d" % rato)
print("Total de sapos: %d" % sapo)
print((f"Percentual de coelhos: {coelho / total * 100:.2f}"), "%")
print((f"Percentual de ratos: {rato / total * 100:.2f}"), "%")
print((f"Percentual de sapos: {sapo / total * 100:.2f}"), "%")
