from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '-':
            x2 = stack.pop()
            x1 = stack.pop()
            result = x1 - x2
            stack.push(result)
        elif token == '/':
            x2 = stack.pop()
            x1 = stack.pop()
            result = x1 / x2
            stack.push(result)
        else:
            # add number operation
            stack.push(int(token))

    return stack.pop()

print(solve_expression("5 10 + 3 *")) # 45
print(solve_expression("5 10 + 3 * 2 + 7 -")) # 40
print(solve_expression("5 10 + 3 * 2 + 7 - 10 /")) # 4


# A = 5, B = 10, C = 30

# A + B - C / A -> 5 10 + 30 5 / -
print(solve_expression('5 10 + 30 5 / -')) # 9

# B + (A * C) / C * 2 -> 10 5 30 * 30 / 2 * +
print(solve_expression('10 5 30 * 30 / 2 * +')) # 20

# A * B - C + 4 * A - B -> 5 10 * 30 - 4 5 * 10 - +
print(solve_expression('5 10 * 30 - 4 5 * 10 - +')) # 30

# (A + C / B ) * (A + B) -> 30 10 / 5 + 5 10 + *
print(solve_expression('30 10 / 5 + 5 10 + *')) # 120

# 50 * B / 2 * 5 / A -> 50 10 * 2 / 5 * 5 /
print(solve_expression('50 10 * 2 / 5 * 5 /')) # 250