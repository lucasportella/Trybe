def find_duplicate(array):
    set1 = set()
    for v in array:
        if v not in set1:
            set1.add(v)
        else:
            return v


print(find_duplicate([1, 3, 2, 4, 5, 1]))