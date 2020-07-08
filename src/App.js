import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
