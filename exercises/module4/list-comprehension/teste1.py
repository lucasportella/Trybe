numeros = [1,2,3,4,5]
divisao = [numero / 2 for numero in numeros]
print(divisao)

#pense no map do javascript

# a primeira palavra numero é a variável de retorno, ou seja, a variável divisão vai receber um array com essa variável numero dentro a cada loop do for que ocorrer, assim como ocorre no retorno do map do javascript

# a segunda palavra numero é a variavel que criamos para o laço for(tem q ser igual a primeira palavra)

# e a variável numeros é a lista que estamos percorrendo

# o que realmente está ocorrendo é:
# for numero in numeros:
    # divisao.append(numero)

# importante percebe que o primeiro numero é a variável manipulável, então podemos fazer o que quisermos com ela, ex: