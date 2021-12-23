import random

def rand_numb_array(n):
    array = []
    for c in range(100):
        average = 0
        for c in range(n):
            average += random.randint(1, n)
        array.append(average / 10)
    return array
        
        

print(rand_numb_array(200))