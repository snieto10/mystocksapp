import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import "./App.css";

class App extends Component {
  state = {
    stock: [
      {
        stock: "APPLE",
        companyName: "Apple Company",
        industry: "Technology",
        qty: 10,
        price: 100,
      },
      {
        stock: "GOOG",
        companyName: "Google Company",
        industry: "Technology",
        qty: 50,
        price: 1010,
      },
      {
        stock: "WBA",
        companyName: "Walgreen",
        industry: "Pharmacy",
        qty: 50,
        price: 30,
      },
      {
        stock: "FB",
        companyName: "Facebook Company",
        industry: "Technology",
        qty: 100,
        price: 140,
      },
      {
        stock: "XOM",
        companyName: "Exxon Mobile",
        industry: "Oil",
        qty: 20,
        price: 80,
      },
    ],
  };
  render() {
    return (
      <>
        <Title />
        <ThirdFloor />
        <Menu />
        <Table stocks={this.state.stock} />
      </>
    );
  }
}

export default App;
