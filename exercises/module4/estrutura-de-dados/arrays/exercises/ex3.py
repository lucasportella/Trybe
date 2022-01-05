def good_combos(array):
    counter = 0
    for c in range(0, len(array)):
        for j in range(c + 1, len(array)):
            if array[c] == array[j]:
                counter += 1
    return counter

print(good_combos([1, 1, 2, 3]))
print(good_combos([1, 3, 1, 1, 2, 3]))