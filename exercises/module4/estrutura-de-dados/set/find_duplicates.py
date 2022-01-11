nums = [1,6,3,9,6,7,3,0,1,6,3,-1,0,3,5,1,2]

def find_duplicates(array):
    already_seen = set()
    repeated = set()
    for num in array:
        if num not in already_seen:
            already_seen.add(num)
        else:
            repeated.add(num)
    return repeated


print(find_duplicates(nums))