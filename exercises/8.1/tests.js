const discount = (discount) => {
  return (price) => {
    return price * discount;
  }
}

const price = 500;

const finalPrice = price -  discount(0.1)(price);
console.log(finalPrice);