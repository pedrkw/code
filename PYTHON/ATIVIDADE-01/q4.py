# Faça um Programa que peça as 4 notas bimestrais e mostre a média.
scoreOne = int(input("Digite a nota um: "))
scoreTwo = int(input("Digite a nota dois: "))
scoreThree = int(input("Digite a nota três: "))
scoreFour = int(input("Digite a nota quatro: "))

totalScore = scoreOne + scoreTwo + scoreThree + scoreFour

print(f"A média final é {totalScore / 4}")