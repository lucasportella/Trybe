def insertion_sort(array):
    # itera sobre cada valor do array
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array

print(insertion_sort([100, 4, 6, 33, 56, 67,2,52,131,3,7,22,1,44,66,3,2,1,77,5,3,5,1,15,68,12,111,31,57,11]))