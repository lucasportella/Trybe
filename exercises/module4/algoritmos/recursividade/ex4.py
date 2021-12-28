def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)

print(mdc(10, 15))

# mdc(10,15) --> mdc(15, 10)
# mdc(15, 10) --> mdc(10,5)
# mdc(10,5) --> mdc(5, 0)
# mdc(5,0) --> 5