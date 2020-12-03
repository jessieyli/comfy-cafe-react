import React, { Component } from "react";
import Item from "./Item";
// import "./filteredlist.css";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taste: "All",
      type: "All",
    };
  }

  render() {
    return (
      <div class="filtered">
        {this.props.list.map((item) => (
          <Item
            name={item.name}
            price={item.price}
            image={item.image}
            sweet={item.sweet}
            salty={item.salty}
            type={item.type}
            addItem={this.addToCart}
          ></Item>
        ))}
      </div>
    );
  }
}

export default FilteredList;
