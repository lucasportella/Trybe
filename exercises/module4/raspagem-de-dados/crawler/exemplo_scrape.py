from parsel import Selector
import requests

base_url = "http://books.toscrape.com/"

def response(url):
    return requests.get(url)


def selector(content):
    return Selector(text=content.text)


resp_root = response(base_url)
root_selector = selector(resp_root)

thumb_url = root_selector.css("div.image_container a::attr(href)").get()

resp_book = response(f'{base_url}{thumb_url}')
book_selector = selector(resp_book)

book_title = book_selector.css("div.product_main h1::text").get()

print(book_title)



