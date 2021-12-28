def aux(n, fixed):
    if n == 1 or n == 2:
        return True
    elif fixed % (n - 1) == 0:
        return False
    else:
        return aux(n -1, fixed)

def is_prime(n):
    return aux(n, n)

print(is_prime(997))

