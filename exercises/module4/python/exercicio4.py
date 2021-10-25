import json

books = []

def percentage(category):
    return  (category * 100) / len(books)

with open("books.json") as file:
    for jsonObj in file:
        booksDict = json.loads(jsonObj)
        books.append(booksDict)

categories = {
    "Python": 0,
    "Java": 0,
    "PHP": 0,
}

for book in books:
    for category in book["categories"]:
        if category in categories:
            categories[category] += 1


csv_headers = ['categoria', 'porcentagem']
csv_data = {}

for category in categories:
    csv_data[category] = percentage(categories[category])
