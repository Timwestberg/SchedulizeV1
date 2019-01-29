import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Schedule from "../components/Scheduler/index";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <Schedule />
      </div>
    );
  }
}

export default Calendar;
