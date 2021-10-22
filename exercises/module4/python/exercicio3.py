reprovados = []

file = open("arquivo2.txt", mode="r")
content = file.read().split("\n")
file.close()

file2 = open("arquivo3.txt", mode="w")

for c in content:
    student_data = c.split(' ')
    student = student_data[0]
    grade = int(student_data[1])
    if grade < 6:
        file2.write(f"{student}\n")
file2.close()
