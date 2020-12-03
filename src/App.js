import "./App.css";
import ItemList from "./ItemList";
import Cart from "./Cart";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const itemList = [
  {
    name: "Muscat Gummies",
    price: 3.52,
    image: "https://i.imgur.com/2wcHXbY.jpg",
    sweet: true,
    salty: false,
    type: "Snack",
  },
  {
    name: "Chocolate Pocky",
    price: 2.09,
    image: "https://i.imgur.com/hXGwDYz.png",
    sweet: true,
    salty: false,
    type: "Snack",
  },
  {
    name: "Bin Bin Rice Crackers",
    price: 2.18,
    image: "https://i.imgur.com/AqLVdz0.jpg",
    sweet: true,
    salty: true,
    type: "Snack",
  },
  {
    name: "Roasted Seaweed",
    price: 0.72,
    image: "https://i.imgur.com/hVlaS2C.jpg",
    sweet: false,
    salty: true,
    type: "Snack",
  },
  {
    name: "Shrimp Crackers",
    price: 2.18,
    image: "https://i.imgur.com/aCeBZC8.jpg",
    sweet: false,
    salty: true,
    type: "Snack",
  },
  {
    name: "Hi-Chew Candy",
    price: 4.52,
    image: "https://i.imgur.com/vpuVVGh.jpg",
    sweet: true,
    salty: false,
    type: "Snack",
  },
  {
    name: "Original Ramune",
    price: 1.28,
    image: "https://i.imgur.com/XahLXf3.jpg",
    sweet: true,
    salty: false,
    type: "Drink",
  },
  {
    name: "Thai Tea",
    price: 2.42,
    image: "https://i.imgur.com/aivczZD.jpg",
    sweet: true,
    salty: false,
    type: "Drink",
  },
  {
    name: "Chrysanthemum Tea",
    price: 1.48,
    image: "https://i.imgur.com/9ykBiWo.jpg",
    sweet: true,
    salty: false,
    type: "Drink",
  },
  {
    name: "Honey Butter Chips",
    price: 3.32,
    image: "https://i.imgur.com/7f8Xbj8.jpg",
    sweet: true,
    salty: true,
    type: "Snack",
  },
  {
    name: "Lychee Calpico",
    price: 2.75,
    image: "https://i.imgur.com/znGUmyF.jpg",
    sweet: true,
    salty: false,
    type: "Drink",
  },
  {
    name: "Aloe Vera Drink",
    price: 1.56,
    image: "https://i.imgur.com/HnfOqLE.jpg",
    sweet: true,
    salty: false,
    type: "Drink",
  },
  {
    name: "Chocolate Hello Panda",
    price: 1.65,
    image: "https://i.imgur.com/4UFlUOf.jpg",
    sweet: true,
    salty: false,
    type: "Snack",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
    };
  }

  addToCart = (name) => {
    let newCart = { ...this.state.cart }; // create copy of the cart
    if (name in newCart) {
      newCart[name] += 1;
    } else {
      newCart[name] = 1;
    }

    this.setState({ cart: newCart });
  };

  removeFromCart = (name) => {
    let newCart = { ...this.state.cart };
    delete newCart[name];
    this.setState({ cart: newCart });
  };

  addOne = (name) => {
    let newCart = { ...this.state.cart };
    newCart[name] += 1;
    this.setState({ cart: newCart });
  };

  removeOne = (name) => {
    let newCart = { ...this.state.cart };
    if (newCart[name] === 1) {
      this.removeFromCart(name);
    } else {
      newCart[name] -= 1;
      this.setState({ cart: newCart });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>comfy cafe</h1>
        <p>Asian snack foods, at an affordable price :)</p>
        <div className="wrapper">
          <ItemList list={itemList} add={this.addToCart}></ItemList>
          <Cart
            cart={this.state.cart}
            addOne={this.addOne}
            removeOne={this.removeOne}
            remove={this.removeFromCart}
          ></Cart>
        </div>
      </div>
    );
  }
}

export default App;
