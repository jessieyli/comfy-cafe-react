import React, { Component } from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsDash, BsPlus } from "react-icons/bs";
import Button from "react-bootstrap/Button";

export default class CartItem extends Component {
  render() {
    return (
      <ListGroupItem>
        <Container>
          <Row>
            {/* displays item image */}
            <Col className="text-center col-3">
              <img src={this.props.image} height="100" alt={this.props.item}></img>
            </Col>
            {/* displays item name and quantity */}
            <Col className="col-6">
              <h5>{this.props.item}</h5>
              <InputGroup>
                <InputGroup.Prepend>
                  <Button
                    variant="secondary"
                    onClick={() => this.props.removeOne(this.props.item)}
                  >
                    <BsDash />
                  </Button>
                </InputGroup.Prepend>
                <InputGroup.Text> {this.props.quantity}</InputGroup.Text>
                <InputGroup.Append>
                  <Button
                    variant="secondary"
                    onClick={() => this.props.addOne(this.props.item)}
                  >
                    <BsPlus />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            {/* displays item price and remove button */}
            <Col className="col-3 text-center">
              <h5>${this.props.price}</h5>
              <Button variant="danger" onClick={() => this.props.remove(this.props.item)}>
                Remove
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    );
  }
}
