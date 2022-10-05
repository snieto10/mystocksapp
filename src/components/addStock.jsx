import React from "react";
import "./addStock.css";

class AddStock extends React.Component {
  render() {
    return (
      <div className="fullpage">
        <div className="addstock">
          <div className="box">
            <form onSubmit={this.props.onSubmit}>
              <input
                className="therealinput"
                type="text"
                id="stockSticker"
                name="stockSticker"
                placeholder="Sticker"
                onChange={this.props.onChange}
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                onChange={this.handleChange}
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="qty"
                name="qty"
                placeholder="Qty"
                onChange={this.handleChange}
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                onChange={this.handleChange}
              ></input>
              <br />
              <input
                className="therealinput"
                type="text"
                id="value"
                name="value"
                placeholder="Value"
                onChange={this.handleChange}
              ></input>
              <br />
              <div className="centel">
                <button onClick={this.props.onAdd} className="btn-input">
                  Add Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStock;
