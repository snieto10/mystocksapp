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
    errors: {},
  };

  validate = () => {
    const errors = {};

    const { newStock } = this.state;
    if (newStock.stock.trim() === "") errors.stock = "Please add sticker";
    if (newStock.companyName.trim() === "")
      errors.companyName = "Please add Company Name";

    return Object.keys(errors).length === 0 ? "" : errors;
  };

  handleChange = (e) => {
    let newStock = { ...this.state.newStock };
    newStock[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ newStock });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });
    if (errors) return;

    console.log("Submitted");
  };
  render() {
    let newStock = this.state.newStock;
    return (
      <div className="fullpage">
        <div className="addstock">
          <form className="box" onSubmit={this.handleSubmit}>
            <div className="close" onClick={this.props.onOpen}>
              x
            </div>
            <input
              className="therealinput"
              type="text"
              id="stock"
              name="stock"
              placeholder="Sticker"
              onChange={this.handleChange}
              value={this.state.newStock.stock.toUpperCase()}
            ></input>
            {this.state.errors.stock && (
              <div className="alert">{this.state.errors.stock}</div>
            )}
            <input
              className="therealinput"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              onChange={this.handleChange}
              value={this.state.newStock.companyName}
            ></input>
            {this.state.errors.companyName && (
              <div className="alert">{this.state.errors.companyName}</div>
            )}
            <input
              className="therealinput"
              type="text"
              id="industry"
              name="industry"
              placeholder="Industry"
              onChange={this.handleChange}
              value={this.state.newStock.industry}
            ></input>

            <input
              className="therealinput"
              type="text"
              id="qty"
              name="qty"
              placeholder="Qty"
              onChange={this.handleChange}
              value={this.state.newStock.qty}
            ></input>

            <input
              className="therealinput"
              type="text"
              id="price"
              name="price"
              placeholder="Price"
              onChange={this.handleChange}
              value={this.state.newStock.price}
            ></input>

            <div className="centel">
              <button
                className="btn-input"
                onClick={() => this.props.onAdd(this.state.newStock)}
              >
                {" "}
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
