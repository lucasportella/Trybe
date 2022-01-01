from time import sleep

def binary_search(array, value):
    index = len(array) // 2
    max_length = len(array) - 1
    min_length = 0
    while max_length >= min_length:
        if array[index] == value:
            return f'Valor {value} encontrado na posição {index}'
        elif array[index] < value:
            min_length = index +1
            index = (max_length + min_length) // 2
        elif array[index] > value:
            max_length = index -1
            index = (max_length + min_length) // 2
    return 'Valor não encontrado.'

print(binary_search([3,5,8,9,17,18,31,42,57,75], 1))
print(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10))