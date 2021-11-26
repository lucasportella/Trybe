from abc import ABC, abstractmethod

class Calculo(ABC):
    def __init__(self, valor):
        self.valor = valor

    @abstractmethod
    def calcular_imposto(self, imposto):
        raise NotImplementedError


class iss(Calculo):
    def calcular_imposto(self):
        return self.valor * 0.1

class icms(Calculo):
    def calcular_imposto(self):
        return self.valor * 0.06

imposto1 = iss(1000)
imposto2 = icms(3333)
print(imposto1.calcular_imposto())
print(imposto2.calcular_imposto())