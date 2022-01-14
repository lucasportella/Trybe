from node import Node


class LinkedList:

    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
    
    def __get_node_at(self, position):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
        return value_to_be_returned

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        last_value = self.__get_node_at(len(self) -1)
        last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position -1)
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

        before_last = self.__get_node_at(len(self) -2)
        last = before_last.next
        before_last.next = None
        self.__length -= 1

        return last

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position -1)
        to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = to_be_removed.next
        to_be_removed.next = None
        self.__length -= 1
        return to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.get_element_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length
    
    def clear(self):
        while not self.is_empty():
            self.remove_first()
    
    def remove_duplicate(self):
        seen_values = set()
        no_duplicates = LinkedList()

        if self.is_empty():
            return no_duplicates

        current_value = self.head_value
        seen_values.add(current_value.value)
        no_duplicates.insert_first(current_value.value)
        
        while current_value.next:
            current_value = current_value.next
            if current_value.value not in seen_values:
                seen_values.add(current_value.value)
                no_duplicates.insert_last(current_value.value)
        
        return no_duplicates
    
    # trybe answer
    # 1 copy object
    # 2 remove first node
    # 3 check if there is other node with the same value of 
    # removed node
    # if no, add node back do object
    # amazing strategy
    def delete_duplicates(self):
        list_with_unique_elements = self()

        while self:
            current_node = self.remove_first()
            if list_with_unique_elements.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

        return list_with_unique_elements


list1 = LinkedList()
print(list1.remove_duplicate())
list1.insert_first(5)
list1.insert_last(4)
list1.insert_last(7)
list1.insert_last(4)
list1.insert_last(4)
list1.insert_last(8)
list1.insert_last(4)
list1.insert_last(9)


        
