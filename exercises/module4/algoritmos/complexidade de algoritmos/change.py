from random import shuffle
# Troco

# Valor final - Quantidade de moedas
# moedas
# resultado


# 16 4
# 25 10 5 1
# S

# [33, 33, 32, 31, 30, 25, 20, 14, 7, 1], 35
# True
# [25,17,12,5,4,2], 35


def troco(lista, valor):
  index = 0
  back = len(lista) -1
  result = valor
  new_list = lista[::]
  while valor != 0:
    for subindex, moeda in enumerate(new_list):
        if moeda <= valor:
            valor -= moeda
        if valor == 0:
            return True
        if subindex == len(new_list) -1:
            valor = result
    print(new_list)
    converter = new_list[0]
    new_list[0] = new_list[len(lista) -1]
    new_list[len(lista) -1] = converter
    print(shuffle(new_list))
    if index == len(new_list) -1:
        break
  return False

# print(troco([25, 10, 5, 1], 16))
print(troco([33, 33, 32, 31, 30, 25, 20, 14, 7, 1], 35))
# print(troco([25,17,12,5,4,2], 35))

