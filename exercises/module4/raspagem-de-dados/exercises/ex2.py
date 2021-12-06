import requests


request_list = [
    "https://api.github.com/users/mojombo",
    "https://api.github.com/users/defunkt",
    "https://api.github.com/users/pjhyett",
    "https://api.github.com/users/wycats",
]

for request in request_list:
    response = requests.get(request)
    print(response.json()['login'])
    print(response.json()['url'])

