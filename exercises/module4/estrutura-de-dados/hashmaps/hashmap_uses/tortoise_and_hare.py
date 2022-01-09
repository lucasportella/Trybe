
def find_duplicate(nums):
    tortoise = nums[0]
    hare = nums[0]
    while True:
        tortoise = nums[tortoise]
        print(tortoise)

print(find_duplicate([2,1,3,1])) 