# Você receberá uma lista de palavras e uma string . Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne à soma do comprimento das palavras escolhidas.

import copy

words = ['cat', 'bt', 'hat', 'tree']
chars = 'atach'
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string são "cat" (tamanho 3) e "hat(tamanho 3)."""



words2 = ['hello', 'world', 'students']
chars2 = 'welldonehoneyr'
# saída: 10
"""Explicação: As palavras que podem ser formadas com os caracteres da string são "hello" (tamanho 5) e "world" (tamanho 5)."""


def fit_word(array, word):
    word_hash = {}
    sum = ''
    for k in word:
        if k not in word_hash:
            word_hash[k] = [k]
        else:
            word_hash[k].append(k)
    
    for k in array:
        word_hash_copy = copy.deepcopy(word_hash)
        word_to_sum = ''
        for l in k:
            if l in word_hash_copy and l in word_hash_copy[l]:
                word_hash_copy[l].pop()
                word_to_sum += l
            else:
                word_to_sum = ''
                break
        sum += word_to_sum

    return len(sum)

        

print(fit_word(words, chars))
print(fit_word(words2, chars2))