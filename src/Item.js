import React from "react";
import "./item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Item extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Img src={this.props.image}></Card.Img>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>${this.props.price}</Card.Text>
            <Card.Text>
              {this.props.sweet && "Sweet"} {this.props.salty && "Salty"}
            </Card.Text>
            <Card.Text>{this.props.type === "Snack" ? "Snack" : "Drink"}</Card.Text>
            <Button onClick={() => this.props.addItem(this.props.name)}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
