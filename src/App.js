import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import { stocks } from "./components/service/stock";
import "./App.css";

class App extends Component {
  state = {
    stock: stocks,
  };

  handleDelete = (sto) => {
    const stock = this.state.stock.filter((s) => sto.stock !== s.stock);
    this.setState({ stock });
  };
  render() {
    const { stock } = this.state;
    const { handleDelete } = this;
    return (
      <>
        <Title />
        <ThirdFloor />
        <Menu />
        <Table stocks={stock} onDelete={handleDelete} />
      </>
    );
  }
}

export default App;
