class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
    
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name
    
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
        # esse return é um booleano, só retorna True ou False,
        # se achar o endereço retorna um inteiro, oq dá True,
        # se não achar, retorna None, oq dá False


employee1 = Employee(14,'lucas')
hashmap1 = HashMap()
hashmap1.insert(employee1)
print(hashmap1.get_value(14))
print(hashmap1._buckets)
print(hashmap1.has(3))