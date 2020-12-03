import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class FilterOptions extends Component {
  render() {
    return (
      <div className="filterOptions">
        <Navbar>
          Taste:
          <Nav defaultActiveKey="All">
            <Nav.Item>
              <Nav.Link eventKey="All" onSelect={this.props.chooseTaste}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Sweet" onSelect={this.props.chooseTaste}>
                Sweet
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Salty" onSelect={this.props.chooseTaste}>
                Salty
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Navbar>
          Type:
          <Nav defaultActiveKey="All">
            <Nav.Item>
              <Nav.Link eventKey="All" onSelect={this.props.chooseType}>
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Snack" onSelect={this.props.chooseType}>
                Snack
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Drink" onSelect={this.props.chooseType}>
                Drink
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Navbar>
          Sort by Price:
          <Nav defaultActiveKey="0">
            <NavDropdown title={this.props.currentSort}>
              <NavDropdown.Item>
                <Nav.Link eventKey="Select a sort order" onSelect={this.props.chooseSort}>
                  No Sort
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link eventKey="Lowest to Highest" onSelect={this.props.chooseSort}>
                  Lowest to Highest
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link eventKey="Highest to Lowest" onSelect={this.props.chooseSort}>
                  Highest to Lowest
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
