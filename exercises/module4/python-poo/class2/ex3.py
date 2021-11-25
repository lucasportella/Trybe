from abc import ABC, abstractmethod


class Figura_Geometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError
    
    def perimetro(self):
        raise NotImplementedError

class Quadrado(Figura_Geometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4

class Retangulo(Figura_Geometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura
    
    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)

class Circulo(Figura_Geometrica):
    def __init__(self, raio):
        self.raio = raio
    
    def area(self):
        return 3.14 * self.raio * self.raio
    
    def perimetro(self):
        return 3.14 * 2 * self.raio


circulo1 = Circulo(3)
print(circulo1.area())