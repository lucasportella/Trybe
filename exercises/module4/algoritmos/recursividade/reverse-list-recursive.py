def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]

print(reverse([1,2,3,4,5,6,7]))


# ida
# reverse([1,2,3,4,5,6,7]) --> reverse([2,3,4,5,6,7]) + [1]
# reverse([2,3,4,5,6,7]) --> reverse([3,4,5,6,7]) + [2]
# reverse([3,4,5,6,7]) --> reverse([4,5,6,7]) + [3]
# reverse([4,5,6,7]) --> reverse([5,6,7]) + [4]
# reverse([5,6,7]) --> reverse([6,7]) + [5]
# reverse([6,7]) --> reverse([7]) + [6]
# reverse([7]) --> [7]

# volta
# reverse([7]) --> [7]
# reverse([6,7]) --> [7,6]
# reverse([5,6,7]) --> [7,6,5]
# reverse([4,5,6,7]) --> [7,6,5,4]
# reverse([3,4,5,6,7]) --> [7,6,5,4,3]
# reverse([2,3,4,5,6,7]) --> [7,6,5,4,3,2]
# reverse([1,2,3,4,5,6,7]) --> [7,6,5,4,3,2,1]