import React, { Component } from "react";
import "./thirdFloor.css";

class ThirdFloor extends Component {
  render() {
    const { value, onSearch, onAdd, onOpen } = this.props;
    return (
      <div className="blocktocenter">
        <div className="third-floor">
          <div className="add" onClick={onOpen}>
            Add Stock
          </div>
          <div className="btn-search">Search</div>
          <div className="search-box">
            <input
              placeholder="Enter Stock Sticker"
              className="search"
              type="text"
              name="query"
              value={value}
              onChange={(e) => onSearch(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdFloor;
