from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1
    
    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        # Mais abaixo criaremos o método is_empty()
        # que substituirá a condição deste if
        if current_value is None:
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1
    
    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)


        # nossa classe possui o atributo len,
        # igual ao nativo do python, logo podemos
        # ver que len 0 são 0 elementos, e ao adicionar
        # o primeiro elemento, teremos o len de 1
        if position >= len(self):
            return self.insert_last(value)

        # vamos varrer a lista começando com a head
        current_value = self.head_value
        
        # da posição 0 até a posição que queremos
        # adicionar, sendo que a posição começa
        # pelo fim até chegar em 1, oq dá no mesmo
        while position > 1:
            current_value = current_value.next
            position -= 1
        
        # depois que encontra a posição, é criado o
        # o node com o nome next_value, o next_value
        # já fazemos apontar para seu devido próx
        # valor, que é o antigo valor do
        # current_value.next, já que este ficará 1
        # posição atrás do next_value, logo
        # o current_value.next deve receber o next_
        # value 
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed
    
    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head_value

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed
    
    def remove_at(self, position):
        if position < 1:
            return self.remove_first()

        # se colocar >= len(self) -1 tbm funciona, sendo
        # mais performático acredito, no caso de remover
        # o último elemento não vai precisar varrer a lista
        # inteira
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_value
        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = Node(value_to_be_returned.value)
        return value_returned
    
    def is_empty(self):
        return not self.__length

list1 = LinkedList()
list1.insert_first(5)
list1.insert_last(7)
list1.insert_last(4)
list1.insert_last(8)
list1.insert_last(9)
print(list1.get_element_at(2))
print(list1)
