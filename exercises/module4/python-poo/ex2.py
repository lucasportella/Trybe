class Square:
    def __init__(self, side):
        self.side = side
    
    def calculate_area(self):
        return self.side * self.side
    
    def calculate_perimeter(self):
        return self.side * 4


square1 = Square(2)

class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def calculate_area(self):
        return self.base * self.height

    def calculate_perimeter(self):
        return (self.base + self.height) * 2

rectangule1 = Rectangle(5,4)
print(rectangule1.calculate_perimeter())