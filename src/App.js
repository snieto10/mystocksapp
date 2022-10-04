import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import ThirdFloor from "./components/thirdFloor";
import Table from "./components/table";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Title />
        <ThirdFloor />
        <Menu />
        <Table />
      </>
    );
  }
}

export default App;
