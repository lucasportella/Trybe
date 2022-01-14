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


        # não pode ser position >= len(self) -1
        # pois escolher a última posição da lista
        # implica deslocar o último elemento para 
        # a direita, criando uma nova última
        # posição, e o elemento adicionado ocupará
        # a penúltima posição
        # para colocar no fim da lista deve ser de
        # fato o len da lista, pois já considera a
        # nova posição a ser criada
        if position >= len(self):
            return self.insert_last(value)

        # vamos varrer a lista começando com a head
        current_value = self.head_value
        
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1


list1 = LinkedList()
list1.insert_first(5)
list1.insert_last(7)
list1.insert_last(4)
list1.insert_last(8)
list1.insert_last(9)
list1.insert_at(6,4)
print(list1)
