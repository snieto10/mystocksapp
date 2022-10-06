import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import AddStock from "./components/addStock";
import Pagination from "./components/common/pagination";
import { stocks } from "./components/service/stock";
import "./App.css";

class App extends Component {
  state = {
    stock: stocks,
    addStock: false,
    linesPerPage: 2,
  };

  handleDelete = (sto) => {
    const stock = this.state.stock.filter((s) => sto.stock !== s.stock);
    this.setState({ stock });
  };

  handleAddStock = (newStock) => {
    let addStock = this.state.addStock;
    addStock = !addStock;
    let stock = [...this.state.stock];
    stock.push(newStock);
    this.setState({ stock, addStock });
  };
  handleOpen = () => {
    let addStock = this.state.addStock;
    addStock = !addStock;
    this.setState({ addStock });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    const { stock, addStock, linesPerPage } = this.state;
    const { handleDelete } = this;

    if (!addStock)
      return (
        <>
          <Title />
          <ThirdFloor onOpen={this.handleOpen} />
          <Menu />
          <Table stocks={stock} onDelete={handleDelete} />
          <Pagination
            totalLines={stock.length}
            linesPerPage={linesPerPage}
            onPageChange={this.handlePageChange}
          />
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
          <Pagination
            totalLines={stock.length}
            linesPerPage={linesPerPage}
            onPageChange={this.handlePageChange}
          />
        </>
      );
  }
}

export default App;
