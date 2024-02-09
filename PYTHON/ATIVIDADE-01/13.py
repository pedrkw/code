# Faça um programa que leia e valide as seguintes informações:
# Nome: maior que 3 caracteres;
# Idade: entre 0 e 150;
# Salário: maior que zero;
# Sexo: 'f' ou 'm';
# Estado Civil: 's - solteiro(a)', 'c - casado(a)', 'v - viúvo(a)', 'd - divorciado(a)';


def name_check():
    name = input("Nome: ")
    while len(name) <= 3:
        print("Nome dever ter mais que 3 caracteres!")
        name = input("Nome: ")
    return name


def salary_check():
    salary = float(input("Salário: "))
    while salary <= 0:
        print("Salário deve ser maior que zero!")
        salary = float(input("Salário: "))
    return salary


def age_check():
    age = int(input("Idade: "))
    while not (0 <= age <= 150):
        print("A idade deve ser entre 0 e 150")
        age = int(input("Idade: "))
    return age


def gender_check():
    gender = input("Sexo: F/M: ").upper()
    while not (gender == "F" or gender == "M"):
        print("Erro! Digite apenas F para feminino ou M para masculino")
        gender = input("Sexo: F ou M: ").upper()
    return gender


def marital_status_check():
    marital_status = input("Estado civil: s/c/v/d: ").lower()
    mar_status = ["s", "c", "v", "d"]
    while marital_status not in mar_status:
        print(
            "Erro! Digite: s - solteiro(a), c - casado(a), v - viúvo(a), d - divorciado(a)"
        )
        marital_status = input("Estado civil: s/c/v/d: ").lower()
    return marital_status


name_output = name_check()
age_output = age_check()
salary_output = salary_check()
gender_output = gender_check()
marital_status_output = marital_status_check()

print(f"\nNome: {name_output}")
print(f"Idade: {age_output}")
print(f"Salário: {salary_output:.2f}")
print(f"Sexo: {gender_output}")
print(f"Estado civil: {marital_status_output}")