def leiaInt(num):
    n = str(input(num))
    if n.isnumeric():
        return f'o valor digitado foi {n}'
    else:
        while n != n.isnumeric():
            print('ERRO! NÃO FOI INFORMADO NUMERAL')
            n = str(input(num))
            if n.isnumeric():
                return f'o valor digitado foi {n}'


n = leiaInt('número escolhido: ')
print(n)