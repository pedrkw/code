import random

number = random.randint(1, 10)
# print(number)
guess = int(input("Guess a number between 1 and 10: "))
# guess = int(guess)

if guess == number:
    print("You won!")
else:
    print('You lose, try again!')