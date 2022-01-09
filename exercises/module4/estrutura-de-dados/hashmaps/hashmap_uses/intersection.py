# Quais elementos da lista 1 também ocorrem na lista 2? Ou seja, 
# qual é a interseção entre as linhas?

list1 = [1,2,3,4,5,6]
list2 = [4,5,6,7,8,9]

# answer = [4, 5, 6]

def intersection(array1, array2):
    dict = {}
    for v in array1:
        if v not in dict:
            dict[v] = True
    
    answer = []
    for v in array2:
        if v in dict:
            answer.append(v)

    return answer

print(intersection(list1, list2))