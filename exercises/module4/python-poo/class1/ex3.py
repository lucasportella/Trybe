class circle:
    def __init__(self, diameter):
        self.radius = diameter / 2
        self.pi = 3.14

    def calculate_area(self):
        return self.pi * (self.radius * self.radius)

    def calculate_perimeter(self):
        return self.radius * self.pi * 2


circle1 = circle(4)
print(circle1.calculate_area())
print(circle1.calculate_perimeter())