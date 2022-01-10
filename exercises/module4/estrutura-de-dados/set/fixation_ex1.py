class Conjunto():
    def __init__(self) -> None:
        self.set = [False for x in range(1000)]
    
    def add(self, item):
        self.set[item] = True

if __name__ == "__main__":
    conj1 = Conjunto()
    conj1.add(999)
    print(conj1.set)