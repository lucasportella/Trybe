estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']

set_estudantes = set(estudantes)
lista1 = set(lista1_entregues)
lista2 = set(lista2_entregues)

# questão 1:
print(set_estudantes.difference(lista1_entregues))

# questão 2:
print(lista1.intersection(lista2))

# questão 3:
print(lista1.union(lista2))

# questão 4:
listas = lista1.union(lista2)
print(set_estudantes.difference(listas))
