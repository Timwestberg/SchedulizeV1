import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import logo from "./logo.svg";
import "./App.css";
import ContractorCard from "./components/contractorCard";

class App extends Component {
  render() {
    return (
      <div>
        <ContractorCard />
      </div>
    );
  }
}

export default App;
