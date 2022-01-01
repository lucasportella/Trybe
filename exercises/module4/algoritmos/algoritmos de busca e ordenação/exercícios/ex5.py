from time import sleep

def binary_search(array, value):
    high_index = len(array) -1
    low_index = 0
    index = (high_index + low_index) // 2
    while high_index > low_index:
        sleep(1)
        print(index)
        if array[index] == value:
            return f'Valor {value} encontrado na posição {index}.'
        elif array[index] < value:
            # low_index = index + 1
            index = (low_index + high_index) // 2
        elif array[index] > value:
            high_index = index - 1
            index = (high_index + low_index) // 2
    return 'Valor não encontrado.'

print(binary_search([3,5,8,9,17,18,31,42,57,75], 9))