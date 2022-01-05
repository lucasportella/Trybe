def instability_calculator(array):
    counter = 0
    max_counter = 0
    for c in array:
        if c == 1:
            counter += 1
        if c == 0:
            if counter > max_counter:
                max_counter = counter
            counter = 0
    return max_counter


print(instability_calculator([0, 1, 1, 1, 0, 0, 1, 1]))

print(instability_calculator([1, 1, 1, 1, 0, 0, 1, 1]))

print(instability_calculator([0, 1, 1, 1, 0, 0, 1, 1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1]))