# Faça um Programa que peça as 4 notas bimestrais e mostre a média.
grade_one = int(input("Digite a nota um: "))
grade_two = int(input("Digite a nota dois: "))
grade_three = int(input("Digite a nota três: "))
grade_four = int(input("Digite a nota quatro: "))

totalScore = (grade_one + grade_two + grade_three + grade_four) / 4

print(f"A média final é {totalScore}")