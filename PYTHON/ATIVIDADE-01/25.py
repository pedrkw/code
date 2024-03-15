# Faça um programa com uma função chamada somaImposto. A função possui dois
# parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa
# em porcentagem e custo, que é o custo de um item antes do imposto. A função
# “altera” o valor de custo para incluir o imposto sobre vendas.
def somaImposto(taxaImposto, custo):
    valorPorcentagem = custo * (taxaImposto / 100)
    return custo + valorPorcentagem


preco = float(input("Digite o preço: "))
imposto = float(input("Digite a porcentagem do imposto: "))
print(f"Custo final: {somaImposto(imposto, preco)}")