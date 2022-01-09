# find most frequent number with linear complexity

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]

def count(array):
    counter = {}
    most_frequent = array[0]
    for num in array:
        if num not in counter:
            counter[num] = 1
        else:
            counter[num] += 1
        if counter[num] > most_frequent:
            most_frequent = counter[num]
    return most_frequent

print(count(nums))
