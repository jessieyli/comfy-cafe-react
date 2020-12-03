import React from "react";
import "./item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

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
            <Card.Text>
              {this.props.type === "Snack" ? "Snack" : "Drink"}
            </Card.Text>
            <Button onClick={() => this.props.addItem(this.props.name)}>Add to Cart</Button>
          </Card.Body>
        </Card>
        {/* <img src={this.props.image} height="200" alt={this.props.name}></img>
        <h2>{this.props.name}</h2>
        <h2>${this.props.price}</h2>
        <h3>
          {this.props.sweet && "Sweet"} {this.props.salty && "Salty"}
        </h3>

        {this.props.type === "Snack" ? <h3>Snack</h3> : <h3>Drink</h3>}
        <Button onClick={() => this.props.addItem(this.props.name)}>Add to Cart</Button> */}
      </div>
    );
  }
}

export default Item;
