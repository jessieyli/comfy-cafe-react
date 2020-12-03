import React, { Component } from "react";
import Item from "./Item";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./itemlist.css";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taste: "All",
      type: "All",
      sortOrder: "Select a sorting order",
    };
  }

  // sets state to the selected taste, passed to the HTML buttons
  chooseFilterTaste = (filter) => {
    this.setState({
      taste: filter,
    });
  };

  // creates a filtering condition
  matchesFilterTaste = (item) => {
    if (this.state.taste === "All") {
      return true;
    } else if (this.state.taste === "Sweet") {
      return item.sweet;
    } else if (this.state.taste === "Salty") {
      return item.salty;
    }
  };

  chooseFilterType = (filter) => {
    this.setState({
      type: filter,
    });
  };

  matchesFilterType = (item) => {
    if (this.state.type === "All") {
      return true;
    } else if (this.state.type === item.type) {
      return true;
    } else {
      return false;
    }
  };

  chooseSortOrder = (sortOrder) => {
    this.setState({
      sortOrder: sortOrder,
    });
  };

  render() {
    let filteredList = [...this.props.list];
    if (this.state.sortOrder === "Lowest to Highest") {
      filteredList = filteredList.sort((a, b) => a.price - b.price);
    } else if (this.state.sortOrder === "Highest to Lowest") {
      filteredList = filteredList.sort((a, b) => b.price - a.price);
    } else if (this.state.sortOrder === "Select a sorting order") {
      filteredList = this.props.list;
    }
    filteredList = filteredList.filter(this.matchesFilterTaste);
    filteredList = filteredList.filter(this.matchesFilterType);
    return (
      <div className="itemList">
        <div className="filterOptions">
          <Navbar>
            Taste:
            <Nav defaultActiveKey="All">
              <Nav.Item>
                <Nav.Link eventKey="All" onSelect={this.chooseFilterTaste}>
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Sweet" onSelect={this.chooseFilterTaste}>
                  Sweet
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Salty" onSelect={this.chooseFilterTaste}>
                  Salty
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <Navbar>
            Type:
            <Nav defaultActiveKey="All">
              <Nav.Item>
                <Nav.Link eventKey="All" onSelect={this.chooseFilterType}>
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Snack" onSelect={this.chooseFilterType}>
                  Snack
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Drink" onSelect={this.chooseFilterType}>
                  Drink
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
          <Navbar>
            Sort by Price:
            <Nav defaultActiveKey="0">
              <NavDropdown title={this.state.sortOrder}>
                <NavDropdown.Item>
                  <Nav.Link
                    eventKey="Select a sort order"
                    onSelect={this.chooseSortOrder}
                  >
                    No Sort
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link eventKey="Lowest to Highest" onSelect={this.chooseSortOrder}>
                    Lowest to Highest
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link eventKey="Highest to Lowest" onSelect={this.chooseSortOrder}>
                    Highest to Lowest
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>
        <div className="filtered">
          {filteredList.map((item) => (
            <Item
              name={item.name}
              price={item.price}
              image={item.image}
              sweet={item.sweet}
              salty={item.salty}
              type={item.type}
              addItem={this.props.add}
            ></Item>
          ))}
        </div>
      </div>
    );
  }
}
