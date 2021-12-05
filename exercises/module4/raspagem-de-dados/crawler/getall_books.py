from parsel import Selector
import requests

base_url = "http://books.toscrape.com/catalogue/"
next_page_url = "page-45.html"

def response(url):
    return requests.get(url)


def selector(content):
    return Selector(text=content.text)


while next_page_url:
    go_next_page = response(f'{base_url}{next_page_url}')
    current_page = selector(go_next_page)
    page_titles = current_page.css(".product_pod h3 a::text").getall()
    for title in page_titles:
        print(title)
    next_page_url = current_page.css(".next a::attr(href)").get()
