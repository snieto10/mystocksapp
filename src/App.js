import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import { stocks } from "./components/service/stock";
import "./App.css";
import AddStock from "./components/addStock";

class App extends Component {
  state = {
    stock: stocks,
    components: [],
  };

  handleDelete = (sto) => {
    const stock = this.state.stock.filter((s) => sto.stock !== s.stock);
    this.setState({ stock });
  };

  handleAddStock = () => {
    console.log("add stock");
  };
  render() {
    const { stock } = this.state;
    const { handleDelete } = this;

    if (!addStock)
      return (
        <>
          <Title />
          <ThirdFloor onAdd={this.handleAddStock} />
          <Menu />
          <Table stocks={stock} onDelete={handleDelete} />
        </>
      );
    if (addStock)
      return (
        <>
          <Title />
          <ThirdFloor onAdd={this.handleAddStock} />
          <AddStock onAdd={this.handleAddStock} />
          <Menu />
          <Table stocks={stock} onDelete={handleDelete} />
        </>
      );
  }
}

export default App;
