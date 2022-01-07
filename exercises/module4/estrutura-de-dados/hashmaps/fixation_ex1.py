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
    
    def change_name(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


hashmap1 = HashMap()

print('-------------------------------')

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

for id_num, name in employees:
    new_employee = Employee(id_num, name)
    hashmap1.insert(new_employee)

print(hashmap1._buckets)
print(hashmap1.get_value(23))
hashmap1.change_name(10,'name30')
print(hashmap1.get_value(10))