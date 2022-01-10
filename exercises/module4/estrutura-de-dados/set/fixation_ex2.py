class Conjunto():
    def __init__(self) -> None:
        self.set = [False for x in range(1000)]
        self.last_element = 0
    
    def add(self, item):
        self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = '{'
        for i, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(i)
                if i < self.last_element:
                    string += ', '
        string += '}'
        return string

if __name__ == "__main__":
    lista1 = [3,7,55,2]
    conj1 = Conjunto()
    for v in lista1:
        conj1.add(v)
    print(conj1.__str__())