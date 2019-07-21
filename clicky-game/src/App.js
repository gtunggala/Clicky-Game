import React, { Component } from "react";
import Navbar from "./components/Navbar/index.js";
import Game from "./components/Game/index.js";
import Footer from "./components/Footer/index.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game />
        <Footer />
      </div>
    );
  }
}
