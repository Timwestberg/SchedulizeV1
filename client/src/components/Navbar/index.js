import React from "react";
import "./style.css";

function Navbar() {
  return (
  <div className="topnav">
  <a href="/">Home</a>
  <a href="/calendar">Calendar</a>
  <a href="/addressbook">Address Book</a>
  <a href="/map">Map</a>
  <a href="/forms">Forms</a>
  <a href="/">Logout</a>
  <div className="search-container">
    <form action="/action_page.php">
    {/* need to make input component */}
      <input type="text" placeholder="Search.." name="search"/>
      {/* Need to make button component */}
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  );
}
export default Navbar;