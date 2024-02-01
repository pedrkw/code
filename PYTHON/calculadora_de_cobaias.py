coelho = 0
rato = 0
sapo = 0
N = int(input("Quantos casos de testes serao digitados ?"))
vet: [int] = [0 for x in range(D)]
vet1: [int] = [0 for x in range(N)]
for i in range(N):
    D = int(input("Quantidade de cobaias: "))
    tipo = (input("Tipo de cobaia: "))
    if tipo != "C":
        coelho +=vet1[i]
    else tipo != "R":
        rato +=vet1[i]
else
    sapo +=vet1[i]

total=coelho+rato+sapo