# # Vamos supor os números não ordenados
# - coleção = 7 1 2 5 4 6 3

# # Faremos a escolha do elemento pivô.
# # Este elemento será o responsável por particionar (dividir) a lista.
# # Posso escolher qualquer elemento neste passo e, por isso,
# # vou escolher o elemento do meio
# - pivot = 5

# # Movemos todos os elementos menores para a esquerda e os maiores para a direita (a)
# - 1 2 4 3    5    7 6

# # Precisamos ordenar as coleções geradas,
# # começando com a lista de elementos inferiores
# - 1 2 4 3

# # Novamente escolhemos o pivot
# - pivot = 2

# # Novamente fazemos a divisão (b)
# - 1    2    4 3

# # A lista à esquerda já não tem como ser particionada,
# # porém a da direita ainda pode ser particionada (c)
# - 4 3

# # Escolhendo o pivô e movendo os outros elementos
# # chegaremos a
# - 3    4

# # Agora precisamos o processo de conquista,
# # voltando recursivamente ao passo (c), que pediu para ordenar
# # a sub coleção 4 3, temos como resposta
# - 3 4
# # essa resposta, nos faz retornar ao passo (b), onde concatenaremos ao pivô a ordenação do lado direito e esquerdo,
# # resultando em
# - 1 2 3 4

# # Vamos agora ver o outro lado do passo (a)
# - 7 6

# # realizando o mesmo processo
# # após escolher o pivô e realizar os movimentos teremos
# - 6    7

# # Por fim a resposta é utilizada lá no passo (a) para concatenarmos os dois lados
# # e termos por fim a lista ordenada
# - 1 2 3 4 5 6 7