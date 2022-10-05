import React from "react";
import "./addStock.css";

class AddStock extends React.Component {
  state = {};
  render() {
    return (
      <div className="fullpage">
        <div className="addstock">
          <div className="box">
            <form>
              <input
                className="therealinput"
                type="text"
                id="stockSticker"
                placeholder="Sticker"
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="CompanyName"
                placeholder="Company Name"
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="qty"
                placeholder="Qty"
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="Price"
                placeholder="Price"
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="value"
                placeholder="Value"
              ></input>
              <br />
              <div className="centel">
                <button className="btn-input">Add Stock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStock;
