# queue problem
# Exercício 3: Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.

class Stack():
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"


    def queue_manager(self, car_to_remove):
        car_position = self.size()
        # find car index:
        for index, car in enumerate(self._data):
            if car == car_to_remove:
                car_position = index
        
        updated_queue = self._data[:car_position]
        for car in self._data[car_position+1:]:
            updated_queue.append(car)
        return updated_queue



stack1 = Stack()
cars = [1,2,3,4,5,6,7,8,9,10,11]
for car in cars:
    stack1.push(car)

print(stack1.queue_manager(7))
print(stack1.queue_manager(67))



# trybe answer
from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operations: ')
    print('1. Add vehicle')
    print('2. Remove a vehicle')
    print('3. Parked vehicles')
    print('4. Close the program')
    option = int(input('Option: '))

    if option == 1:
        plate_number = input('plate number: ')
        garage.push(plate_number)
        print('Vehicle ' + plate_number + ' parked')
    elif option == 2:
        vehicle_plate = input('plate number: ')
        street = Stack()
        removed = False
        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print('Vehicle ' + vehicle_plate + ' removed')
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print('There is no vehicle parked with this plate')
    elif option == 3:
        print('Parked vehicles: ' + str(garage))
    else:
        print('Finishing The garage Plus 2000!')
        option = 4