import React from "react";
import "./menu.css";

class Menu extends React.Component {
  state = {
    industries: [
      "Technology",
      "Oil",
      "Real Estate",
      "Financials",
      "Healthcare",
      "Materials",
      "Consumer",
    ],
  };
  render() {
    return (
      <div className="blockcenter">
        <div className="block-menu">
          <div className="menu-list" onClick={this.props.allFilter}>
            All industries
          </div>
          <div>
            <ul>
              {this.state.industries.map((i) => (
                <li
                  onClick={() => this.props.onFilter(i)}
                  key={i}
                  className="menu-list"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
