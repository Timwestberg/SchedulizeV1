import React, { Component } from "react";
import Appointmentform from "./components/AppointmentForm";
import ContractorCard from "./components/contractor";
import ApptCard from "./components/Appointments/ApptCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appointmentform />

        <ContractorCard />

        <ApptCard />
      </div>
    );
  }
}

export default App;
