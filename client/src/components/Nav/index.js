import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="calendar"><a href="/calendar">Calendar</a></li>
        <li className="address"><a href="/addressbook">Address Book</a></li>
        <li className="map"><a href="/map">Map</a></li>
        <li className="logout"><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
