# Altere o programa anterior permitindo ao usuário informar as populações e as taxas de
# crescimento iniciais. Valide a entrada e permita repetir a operação
# Solicita ao usuário as populações e as taxas de crescimento iniciais
country_a = int(input("Informe a população inicial do país A: "))
country_b = int(input("Informe a população inicial do país B: "))
growth_rate_a = float(input("Informe a taxa de crescimento anual do país A (em porcentagem): ")) / 100
growth_rate_b = float(input("Informe a taxa de crescimento anual do país B (em porcentagem): ")) / 100

count = 0

while country_a >= country_b:
    print("A população do país A deve ser menor que a do país B.")
    country_a = float(input("Informe novamente a população inicial do país A: "))
    country_b = float(input("Informe novamente a população inicial do país B: "))

while country_a < country_b:
    count += 1
    country_a *= (1 + growth_rate_a)
    country_b *= (1 + growth_rate_b)

print(f"O país A demorou {count} anos para chegar em {country_a:.2f} habitantes.")
print(f"O país B demorou {count} anos para chegar em {country_b:.2f} habitantes.")

if country_a > country_b:
    print(f"O país A levou {count} anos para ultrapassar o país B.")
else:
    print(f"O país A e o país B se igualaram após {count} anos.")