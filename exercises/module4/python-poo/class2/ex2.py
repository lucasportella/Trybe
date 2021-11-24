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
    
    @classmethod
    def moda(cls, lista):
        numero_moda = "não_inicializado"
        sem_repetição = []
        mais_repetições = 0
        contador = 0
        for numero in lista:
            if numero not in sem_repetição:
                sem_repetição.append(numero)
        for numero_unico in sem_repetição:
            for numero in lista:
                if numero == numero_unico:
                    contador += 1
            if contador > mais_repetições:
                mais_repetições = contador
                numero_moda = numero_unico
            contador = 0
        return {"numero moda":numero_moda, "repetições": numero_unico}


print(Estatistica.moda([5,33,2,5,9,4,1,33,1,4,3,7,6,33,33,33]))
