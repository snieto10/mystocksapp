import React from "react";
import "./addStock.css";

class AddStock extends React.Component {
  state = {
    newStock: {
      stock: "",
      companyName: "",
      industry: "",
      qty: "",
      price: "",
    },
  };
  handleChange = (e) => {
    let newStock = { ...this.state.newStock };
    newStock[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ newStock });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    let newStock = this.state.newStock;
    return (
      <div className="fullpage">
        <div className="addstock">
          <form className="box" onSubmit={this.handleSubmit}>
            <input
              className="therealinput"
              type="text"
              id="stock"
              name="stock"
              placeholder="Sticker"
              onChange={this.handleChange}
              value={this.state.newStock.stock}
            ></input>
            <br />
            <input
              className="therealinput"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              onChange={this.handleChange}
              value={this.state.newStock.companyName}
            ></input>
            <br />
            <input
              className="therealinput"
              type="text"
              id="industry"
              name="industry"
              placeholder="Industry"
              onChange={this.handleChange}
              value={this.state.newStock.industry}
            ></input>
            <br />
            <input
              className="therealinput"
              type="text"
              id="qty"
              name="qty"
              placeholder="Qty"
              onChange={this.handleChange}
              value={this.state.newStock.qty}
            ></input>
            <br />
            <input
              className="therealinput"
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              onChange={this.handleChange}
              value={this.state.newStock.price}
            ></input>
            <br />
            <div className="centel">
              <button
                onClick={() => this.props.onAdd(newStock)}
                className="btn-input"
              >
                Add Stock
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddStock;
