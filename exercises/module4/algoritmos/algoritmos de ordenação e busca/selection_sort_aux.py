array1 = [0,1,2]
array2 = ['a','b','c']


# swap de posições, os valores da esquerda só são modificados após o final de toda a operação(a linha terminar de executar), assim não gera ambiguidade, caso contrário array2[0] receberia o seu próprio valor
array1[0], array2[0] = array2[0], array1[0]

print(array1[0])
print(array2[0])
# output:
# a
# 0


print(array1)
print(array2)
# output:
# ['a', 1, 2]
# [0, 'b', 'c']