from stack import Stack

def reverse_word(stack):
    item = ''
    to_reverse = ''
    while item != '(':
        item = stack.pop()
        if item == '(':
            break
        to_reverse += item
    for letter in to_reverse:
        stack.push(letter)





def sentence_fixer(sentence):
    stack1 = Stack()
    for  letter in sentence:
        if letter != ')':
            stack1.push(letter)
        else:
            reverse_word(stack1)
    
    answer = []
    while not stack1.is_empty():
        item = stack1.pop()
        answer.insert(0,item)
    return ''.join(answer)
            

print('LUCAS')
print(sentence_fixer('teste(lagel)'))
print(sentence_fixer('(abcd)'))
print(sentence_fixer('(u(love)i)'))
print(sentence_fixer('(ed(et(oc))el)'))
print(sentence_fixer('a(bcdefghijkl(mno)p)q'))
print('..............................................')





# trybe answer
from stack import Stack


def reverse_word(stack):
    char = ')'
    reversed_word = []
    while char != '(':
        char = stack.pop()
        if char != '(':
            reversed_word.append(char)

    for letter in reversed_word:
        stack.push(letter)


def reverse_letters(phrase):
    stack = Stack()
    for char in phrase:
        if char != ')':
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []
    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return ''.join(reversed(reversed_phrase))

print('TRYBE')
print(reverse_letters('teste(lagel)'))
print(reverse_letters('(abcd)'))
print(reverse_letters('(u(love)i)'))
print(reverse_letters('(ed(et(oc))el)'))
print(reverse_letters('a(bcdefghijkl(mno)p)q'))