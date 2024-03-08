 # Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
grade_one = float(input("Digite a nota um: "))
grade_two = float(input("Digite a nota dois: "))
grade_three = float(input("Digite a nota três: "))
grade_four = float(input("Digite a nota quatro: "))

avg_grade = (grade_one + grade_two + grade_three + grade_four) / 4

print(f"\nNota um: {grade_one}\nNota dois: {grade_two}\nNota três: {grade_three}\nNota quatro: {grade_four}\nMédia final: {avg_grade}")