# # Vamos supor os números não ordenados
# - coleção = 3 2 1 7

# # vamos pegar o primeiro elemento e movê-lo até sua posição
# - elemento = 3

# # como não há elementos a esquerda de 3 não o movemos
# - coleção = 3 2 1 7

# # agora vamos pegar o segundo elemento
# - elemento = 2

# # vamos movê-lo à esquerda, enquanto seu valor for menor
# # que o elemento a sua esquerda
#              ⤺
# - coleção = 2 3 1 7

# # próximo elemento da coleção
# - elemento = 1

# # vamos inseri-lo na  posição correta,
# # movendo para a esquerda enquanto seu valor for menor
# # que o elemento a esquerda
#              ⤺ ⤺
# - coleção = 1 2 3 7

# # por fim verificamos o último elemento
# - elemento = 7

# # não há elementos menores a esquerda
# # e a coleção está ordenada
# - coleção = 1 2 3 7