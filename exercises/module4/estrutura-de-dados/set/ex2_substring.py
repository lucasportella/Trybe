str = "serdevemuitolegalmasehprecisoestudarbastante"
str2 = "abcdefghfijklmnopqrs"

def longest_substring(str):
    longest = 0
    already_seen = {}
    counter = 0
    i = 0
    while i < len(str):
        if str[i] not in already_seen:
            already_seen[str[i]] = i
            counter += 1
            if counter > longest:
                longest = counter
            i += 1
        else:
            i = already_seen[str[i]] + 1
            already_seen.clear()
            counter = 0
    
    return longest

print(longest_substring(str))
print(longest_substring(str2))



def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest

print(longer_no_repeating_substring_len(str))
print(longer_no_repeating_substring_len(str2))