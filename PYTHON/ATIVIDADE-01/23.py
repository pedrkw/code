# Faça um programa, com uma função que necessite de três
# argumentos, e que forneça a soma desses três argumentos.
def sum_args(arg1, arg2, arg3):
    try:
        arg1 = float(arg1)
        arg2 = float(arg2)
        arg3 = float(arg3)
        return arg1 + arg2 + arg3
    except ValueError:
        return str(arg1) + str(arg2) + str(arg3)


result = sum_args(10, "20", 30.5)
print("Resultado:", result)