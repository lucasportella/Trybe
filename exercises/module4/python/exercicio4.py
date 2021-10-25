import json

books = []
with open("books.json") as file:
    for jsonObj in file:
        booksDict = json.loads(jsonObj)
        books.append(booksDict)
