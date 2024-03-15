# Faça um programa para a leitura de duas notas parciais de um aluno.
# O programa deve calcular a média alcançada por aluno e apresentar:
# A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
# A mensagem "Reprovado", se a média for menor do que sete;
# A mensagem "Aprovado com Distinção", se a média for igual a dez.
grade_one = float(input("Digite a nota um: "))
grade_two = float(input("Digite a nota dois: "))

avg = (grade_one + grade_two) / 2

if (avg == 10):
    print("Aprovado com Distinção")
elif (avg >= 7):
    print("Aprovado")
else:
    print("Reprovado")