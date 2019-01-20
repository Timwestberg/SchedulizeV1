import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="calendar"><a href="/calendar">Calendar</a></li>
        <li className="address"><a href="/addressbook">Address Book</a></li>
        <li className="map"><a href="/map">Map</a></li>
        <li className="forms"><a href="/forms">Forms</a></li>
        <li className="logout"><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;