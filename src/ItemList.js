import React, { Component } from "react";
import Item from "./Item";
import "./itemlist.css";
import FilterOptions from "./FilterOptions";

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
        <FilterOptions
          chooseTaste={this.chooseFilterTaste}
          chooseType={this.chooseFilterType}
          chooseSort={this.chooseSortOrder}
          currentSort={this.state.sortOrder}
        ></FilterOptions>
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
