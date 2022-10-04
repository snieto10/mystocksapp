import React, { Component } from "react";
import Title from "./components/title";
import Menu from "./components/menu";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Title />
        <Menu />
      </>
    );
  }
}

export default App;
