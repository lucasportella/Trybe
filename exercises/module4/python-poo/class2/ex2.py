from functools import reduce

class Ordenador():
    @classmethod
    def ordenar(cls, lista):
        lista.sort()
        return lista

class Estatistica():
    @classmethod
    def media(cls, lista):
        total = reduce(lambda acc, n: acc + n, lista)
        return total / len(lista)

    @classmethod
    def mediana(cls, lista):
        if len(lista) % 2 == 0:
            meio_esquerda = int(len(lista) / 2)
            meio_direita = int(len(lista) / 2) + 1
            return (lista[meio_esquerda -1] + lista[meio_direita -1]) / 2
        if len(lista) % 2 != 0:
            meio = int(len(lista) // 2) + 1
            return lista[meio -1]

print(Estatistica.mediana([5,2,9,4,1,4,3,7,6]))
print(Ordenador.ordenar([5,2,9,4,1,4,3,7,6]))
