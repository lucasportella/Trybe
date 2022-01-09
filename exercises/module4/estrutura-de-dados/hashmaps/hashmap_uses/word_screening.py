# separe as palavras de acordo com sua letra inicial
# resposta:
# a: ['ana', 'ama', 'ama', 'ama', 'ana']
# j: ['joao', 'jose', 'jose']
# q: ['que']
# m: ['mas']
# n: ['nao']

def word_screening(array):
    dict = {}
    for word in array:
        if word[0] not in dict:
            dict[word[0]] = [word]
        else:
            dict[word[0]].append(word)
    for k,v in dict.items():
        print(f'{k}: {v}')


text = ['ana', 'ama', 'joao', 'que', 'ama', 'jose', 'mas', 'jose', 'nao','ama','ana']

word_screening(text)