def even_counter(n):
    counter = 0
    for c in range(1, n+1):
        if c % 2 == 0:
            counter += 1
    return counter

print(even_counter(10))