import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import AddStock from "./components/addStock";
import Pagination from "./components/common/pagination";
import { stocks } from "./components/service/stock";
import { paginate } from "./utils/paginate";
import "./App.css";

class App extends Component {
  state = {
    stock: stocks,
    addStock: false,
    linesPerPage: 6,
    currentPage: 1,
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
    this.setState({ currentPage: page });
  };

  render() {
    const { stock, addStock, linesPerPage, currentPage } = this.state;
    const { handleDelete, handleOpen, handlePageChange, handleAddStock } = this;

    const stocks = paginate(stock, currentPage, linesPerPage);

    if (!addStock)
      return (
        <>
          <Title />
          <ThirdFloor onOpen={handleOpen} />
          <Menu />
          <Table stocks={stocks} onDelete={handleDelete} />
          <Pagination
            totalLines={stock.length}
            linesPerPage={linesPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      );
    if (addStock)
      return (
        <>
          <Title />
          <ThirdFloor onAdd={handleAddStock} />
          <AddStock onAdd={handleAddStock} />
          <Menu />
          <Table stocks={stocks} onDelete={handleDelete} />
          <Pagination
            totalLines={stock.length}
            linesPerPage={linesPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      );
  }
}

export default App;
