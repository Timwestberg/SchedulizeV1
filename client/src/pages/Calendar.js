import React, { Component } from "react";
import DailyView from "../components/DailyView";
// import Basic from "../components/NewCalendar/Basic"
import Navbar from "../components/Navbar";

class Calendar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <DailyView />
        {/* <Basic /> */}
      </div>
    );
  }
}

export default Calendar;
