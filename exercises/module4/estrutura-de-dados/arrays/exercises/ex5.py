def count_servers(grid):
    counter = 0
    for row in range(len(grid)):
       for column in range(len(grid[row])):

            if grid[row][column] == 1:

                for row2 in range(len(grid)):
                    for column2 in range(len(grid[row2])):
                        if grid[row2][column2] == 1 and (row2 == row or column2 == column):
                            counter += 1
                counter -= 1
                # counter - 1 because it counts itself as another connected server
    return counter
    

print(count_servers([[1,0],[0,1]]))


print(count_servers([[1,0],[1,1]])) # here the output is 4 and the answer algorithm is 3, which makes me confuse, idk if i need to count connected servers as 1 or 2, 3 as answer seems impossible, should be 2 or 4

[1,0]
[1,1]

print(count_servers(
              [[1, 0, 0],
              [1, 0, 0],
              [0, 0, 1]]
              ))
























# answer
def count_servers(grid):

    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer

print(count_servers([[1,0],[1,1]]))