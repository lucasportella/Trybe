words = ['cat', 'bt', 'hat', 'tree']
chars = 'atach'

words2 = ['hello', 'world', 'students']
chars2 = 'welldonehoneyr'

def fit_word(array, word):
    sum = ''
    dict = {}
    for l in word:
        if l not in dict:
            dict[l] = 1
        else:
            dict[l] += 1

    for w in array:
        temp_dict = {}
        temp_sum = ''
        for l in w:
            if l in dict:
                if l not in temp_dict:
                    temp_dict[l] = 1
                    temp_sum += l
                else:
                    temp_dict[l] +=1
                    temp_sum += l
                    if temp_dict[l] > dict[l]:
                        temp_sum = ''
                        break
            else:
                temp_sum = ''
                break
        sum += temp_sum
    
    return len(sum)
                    
            


print(fit_word(words, chars))
print(fit_word(words2, chars2))