import React, { Component } from "react";
import "./thirdFloor.css";

class ThirdFloor extends Component {
  state = {};
  render() {
    return (
      <div className="blocktocenter">
        <div className="third-floor">
          <div className="add" onClick={this.props.onOpen}>
            Add Stock
          </div>
          <div className="btn-search">Search</div>
          <div className="search-box">
            <input
              placeholder="Enter Stock Sticker"
              className="search"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdFloor;
