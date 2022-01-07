def string_counter(string):
    dict1 = {}
    for v in string:
        if v in dict1:
            dict1[v] += 1
        else:
            dict1[v] = 1
    return dict1

print(string_counter("bbbbaaaacccaaaaaaddddddddccccccc"))
