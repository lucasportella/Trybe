class Conjunto():
    def __init__(self) -> None:
        self.set = [False for x in range(1,1001)]
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
    
    def __contains__(self, item):
        return self.set[item]

    def union(self, conjB):
        new_conj = Conjunto()
        for x in range(1000):
            if self.set[x] or conjB.set[x]:
                new_conj.add(x)
        return new_conj


if __name__ == "__main__":
    
    lista1 = [3,7,55,2]
    conj1 = Conjunto()
    for v in lista1:
        conj1.add(v)

    conj2 = Conjunto()
    conj3 = Conjunto()
    for x in range(1,11):
        conj2.add(x)
    
    for x in range(10,21):
        conj3.add(x)
    
    print(conj2.union(conj3))

