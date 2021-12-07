from pymongo import MongoClient

client = MongoClient()
db = client.library
category = input('Escolha uma categoria: ')
for book in db.books.find({"categories": category}, projection=["title"]):
    print(book['title'])