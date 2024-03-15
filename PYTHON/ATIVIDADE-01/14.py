# Supondo que a população de um país A seja da ordem de 80000 habitantes com uma
# taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com
# uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número
# de anos necessários para que a população do país A ultrapasse ou iguale a população
# do país B, mantidas as taxas de crescimento.
country_a = 80000
country_b = 200000
count = 0

while country_a <= country_b:
    count += 1
    country_a *= 1.03
    country_b *= 1.015

print(f"O país A demorou {count} anos para chegar em {country_a:.0f} habitantes.")
print(f"O país B demorou {count} anos para chegar em {country_b:.0f} habitantes.")

if country_a > country_b:
    print(f"O pais A demorou {count} para ultrapassar o pais B")
else:
    print(f"O pais A demorou {count} para se igualar o pais B")