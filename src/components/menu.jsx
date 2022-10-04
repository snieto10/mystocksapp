import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className="blockcenter">
      <div className="block-menu">
        <div className="mystock">My Stocks</div>
        <div>
          <ul>
            <li className="menu-list">All Industries</li>
            <li className="menu-list">Technology</li>
            <li className="menu-list">Food</li>
            <li className="menu-list">Oil</li>
            <li className="menu-list">Consumer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
