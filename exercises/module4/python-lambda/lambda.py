def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)

a = 3
print(lambda a : a * 2)