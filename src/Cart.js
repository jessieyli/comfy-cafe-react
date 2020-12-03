import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./cart.css";
import CartItem from "./CartItem";

// each item's image and price, so we don't need the entire original
// item list from App.js
const itemLookup = {
  "Muscat Gummies": [3.52, "https://i.imgur.com/2wcHXbY.jpg"],
  "Chocolate Pocky": [2.09, "https://i.imgur.com/hXGwDYz.png"],
  "Bin Bin Rice Crackers": [2.18, "https://i.imgur.com/AqLVdz0.jpg"],
  "Roasted Seaweed": [0.72, "https://i.imgur.com/hVlaS2C.jpg"],
  "Shrimp Crackers": [2.18, "https://i.imgur.com/aCeBZC8.jpg"],
  "Hi-Chew Candy": [4.52, "https://i.imgur.com/vpuVVGh.jpg"],
  "Original Ramune": [1.28, "https://i.imgur.com/XahLXf3.jpg"],
  "Thai Tea": [2.42, "https://i.imgur.com/aivczZD.jpg"],
  "Chrysanthemum Tea": [1.48, "https://i.imgur.com/9ykBiWo.jpg"],
  "Honey Butter Chips": [3.32, "https://i.imgur.com/7f8Xbj8.jpg"],
  "Lychee Calpico": [2.75, "https://i.imgur.com/znGUmyF.jpg"],
  "Aloe Vera Drink": [1.56, "https://i.imgur.com/HnfOqLE.jpg"],
  "Chocolate Hello Panda": [1.65, "https://i.imgur.com/4UFlUOf.jpg"],
};

export default class Cart extends Component {
  render() {
    // calculate total price
    let total = Object.keys(this.props.cart).reduce(
      (previous, key) => previous + this.props.cart[key] * itemLookup[key][0],
      0
    );
    total = total.toFixed(2);
    return (
      <div className="cart">
        <Card className="text-left">
          <Card.Header as="h4">Shopping Cart</Card.Header>
          <ListGroup>
            {Object.keys(this.props.cart).map((itemName) => (
              <CartItem
                item={itemName}
                image={itemLookup[itemName][1]}
                price={itemLookup[itemName][0]}
                quantity={this.props.cart[itemName]}
                removeOne={this.props.removeOne}
                addOne={this.props.addOne}
                remove={this.props.remove}
              ></CartItem>
            ))}
          </ListGroup>
          <Card.Footer>
            <h4>Total: ${total}</h4>
            <Button className="col-3" variant="success">
              Checkout
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
