import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import AddStock from "./components/addStock";
import Pagination from "./components/common/pagination";
import { stocks } from "./components/service/stock";
import { paginate } from "./utils/paginate";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = {
    stock: stocks,
    addStock: false,
    linesPerPage: 6,
    currentPage: 1,
    industry: "",
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
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

  handleFilter = (i) => {
    this.setState({ industry: i, currentPage: 1, searchQuery: "" });
  };

  handleAllfilter = () => {
    this.setState({ industry: "" });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, industry: "", currentPage: 1 });
  };

  render() {
    const {
      stock,
      addStock,
      linesPerPage,
      currentPage,
      industry,
      sortColumn,
      searchQuery,
    } = this.state;
    const { handleDelete, handleOpen, handlePageChange, handleAddStock } = this;

    let filtering = stock;
    if (searchQuery)
      filtering = stock.filter((m) =>
        m.stock.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (industry)
      filtering = stock.filter((fil) => fil.industry === industry);

    const sorted = _.orderBy(filtering, [sortColumn.path], [sortColumn.order]);

    let stocks = paginate(sorted, currentPage, linesPerPage);

    if (!addStock)
      return (
        <>
          <Title />
          <ThirdFloor
            onAdd={handleAddStock}
            value={searchQuery}
            onSearch={this.handleSearch}
          />
          <Menu onFilter={this.handleFilter} allFilter={this.handleAllfilter} />
          <Table
            stocks={stocks}
            onDelete={handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            totalLines={filtering.length}
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
          <ThirdFloor
            onAdd={handleAddStock}
            value={searchQuery}
            onSearch={this.handleSearch}
          />
          <AddStock onAdd={handleAddStock} />
          <Menu onFilter={this.handleFilter} allfilter={this.handleAllfilter} />
          <Table stocks={stocks} onDelete={handleDelete} />
          <Pagination
            totalLines={filtering.length}
            linesPerPage={linesPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      );
  }
}

export default App;
