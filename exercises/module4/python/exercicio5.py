import json
import random

with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]

guess = ''
hint = ''
hint_counter = 0
answer = pokemons[random.randint(1, len(pokemons))]['name']
while answer != guess:
    guess = input('Adivinhe o nome do Pokemon: ')
    hint += answer[hint_counter]
    hint_counter += 1
    print(hint)
    if hint == answer:
        print(f'Resposta: {answer}')
        break
