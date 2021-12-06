from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado
next_page_url = 'page-1.html'

while next_page_url:
    page = requests.get(URL_BASE + next_page_url)
    page_selector = Selector(text=page.text)
    page_books = page_selector.css(".product_pod")
    for book in page_books:
        print(book.css("h3 a::attr(title)").get())
        print(book.css(".product_price .price_color::text").get())
        book_url = book.css("h3 a::attr(href)").get()
        book_page = requests.get(URL_BASE + book_url)
        book_selector = Selector(text=book_page.text)
        book_description = book_selector.css("#product_description ~ p::text").get()
        print(book_description.split()[0])
        # reduzi a descrição a uma palavra só para não ficar tão grande o ouput
    print('///////////////////////////////////')
    print('PAGE END')
    print('///////////////////////////////////')

    next_page_url = page_selector.css(".next a::attr(href)").get()
