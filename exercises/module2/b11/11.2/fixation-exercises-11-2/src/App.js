import './App.css';
import Image from './Image';
import Order from './Order';

function App() {
  const headphone = {
    id: 102,
    user: "cena@gmail.com",
    product: "Razer Headphone",
    price: {
      value: 99.99,
      currency: "dollars"
    }
  };
  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };
  return (
    <div className="App">
      <h1> Orders recently created</h1>
      <Order abc= {energyDrink}></Order>
      <Order abc= {headphone}></Order>
    </div>
  )
}

export default App;
