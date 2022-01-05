def students_counter(arrivals, departure, time):
    counter = 0
    for a in range(len(arrivals)):
        if arrivals[a] <= time <= departure[a]:
            counter +=1
    return counter


print(students_counter([1, 2, 3], [3, 2, 7], 4))
