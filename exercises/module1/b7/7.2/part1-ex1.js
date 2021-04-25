const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);

}

// customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = '50';

  const muzzarela = order.order.pizza.margherita;
  let newKey = 'muzzarela';
  order.order.pizza[newKey] = muzzarela;

  const calabresa = order.order.pizza.pepperoni;
  let newKey2 = 'calabresa';
  order.order.pizza[newKey2] = calabresa;
  delete order.order.pizza.margherita;
  delete order.order.pizza.pepperoni;
  
  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`);

}

orderModifier(order);