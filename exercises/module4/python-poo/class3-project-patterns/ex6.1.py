from abc import ABC, abstractmethod

class Orçamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)

class Imposto(ABC):
    @abstractmethod
    def calcular(cls, valor):
        raise NotImplementedError

class ISS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1

orcamento = Orçamento(1000)
print(orcamento.calcular_imposto(ISS))