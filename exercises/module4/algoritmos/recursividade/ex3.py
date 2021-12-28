def find_biggest(list):
    if len(list) < 2:
        return list[0]
    elif list[len(list) - 1] > list[len(list) - 2]:
        return find_biggest(list[:len(list) -2] + [list[len(list) - 1]])
    else:
        return find_biggest(list[:len(list) -1])

print(find_biggest([1,22,3,4,5,1,2,8,8,8,55,3,2,11,11,2]))
print(find_biggest([1, 21, 300, 4, 57]))
