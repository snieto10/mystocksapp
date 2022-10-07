import React from "react";
import "./menu.css";

class Menu extends React.Component {
  state = {
    industries: ["Technology", "Oil"],
  };
  render() {
    return (
      <div className="blockcenter">
        <div className="block-menu">
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
