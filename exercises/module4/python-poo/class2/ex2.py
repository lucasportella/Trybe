from functools import reduce


class Estatistica():
    @classmethod
    def ordenar(cls, lista):
        lista.sort()
        return lista

    @classmethod
    def media(cls, lista):
        total = reduce(lambda acc, n: acc + n, lista)
        return total / len(lista)

    @classmethod
    def mediana(cls, lista):
        lista_em_ordem = cls.ordenar(lista)
        if len(lista) % 2 == 0:
            meio_esquerda = int(len(lista_em_ordem) / 2)
            meio_direita = int(len(lista_em_ordem) / 2) + 1
            return (lista_em_ordem[meio_esquerda -1] + lista_em_ordem[meio_direita -1]) / 2
        if len(lista_em_ordem) % 2 != 0:
            meio = int(len(lista_em_ordem) // 2) + 1
            return lista_em_ordem[meio -1]

print(Estatistica.mediana([5,2,9,4,1,4,3,7,6]))
