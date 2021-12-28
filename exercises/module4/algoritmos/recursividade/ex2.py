def even_counter(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return even_counter(n -1) + 1
    else:
        return even_counter(n -1)

print(even_counter(10))

# even_counter(10) --> even_counter(10 - 1) + 1
# even_counter(9) --> even_counter(9 - 1)
# even_counter(8) --> even_counter(8 - 1) + 1
# even_counter(7) --> even_counter(7 - 1)
# even_counter(6) --> even_counter(6 - 1) + 1
# even_counter(5) --> even_counter(5 - 1)
# even_counter(4) --> even_counter(4 - 1) + 1
# even_counter(3) --> even_counter(3 - 1)
# even_counter(2) --> even_counter(2 -1) + 1
# even_counter(1) --> 0

# 0
# 0 + 1
# 0 + 1 + 0
# 0 + 1 + 0 + 1 ...