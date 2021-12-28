def recursive_sum(n):
    if n == 1:
        return 1
    return recursive_sum(n - 1) + n

print(recursive_sum(7))


# rec(4) -> (4 - 1) + 4
# rec(3) -> (3 - 1) + 3
# rec(2) -> (2 - 1) + 2
# rec(1) -> 1