def shuffle(array):
    result = []
    mid = len(array) // 2
    for c in range(mid):
        result.append(array[c + mid])
        result.append(array[c])
    return result


print(shuffle([1, 3, 4, 4, 5, 5, 6, 6, 7]))
