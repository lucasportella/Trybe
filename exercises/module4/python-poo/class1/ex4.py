class item:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def change_price(self, new_price):
        self.price = new_price

class order:
    def __init__(self, client, consumed, payment):
        self.client = client
        self.payment = payment
        self.consumed = consumed
        self.discount = 1

    def calculate_total(self):
        total = 0
        for item in self.consumed:
            total = total + item.price
        return total

    def calculate_discount(self):
        if self.payment == 'bitcoin':
            self.discount = 50/100
        if self.payment == 'money':
            self.discount = 10/100
        return self.calculate_total() * self.discount


coca = item('coca', 5)
steak = item('steak', 25)
rice = item('rice', 4)

consumed = [coca, steak, rice]

order1 = order('lucas',consumed, 'bitcoin')
print(order1.calculate_discount())