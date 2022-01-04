# import sys

class Array:
    # ...
    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

# ...
array = Array()
array.set(0, "Marcos")
array.set(1, "Patrícia")
print(array)  # saída: ['Marcos', 'Patrícia']

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']