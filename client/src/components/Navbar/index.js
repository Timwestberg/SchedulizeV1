import React from "react";
import "./style.css";

function Navbar() {
  return (
    // <nav className="nav">
    //   <ul>
    //     <li className="calendar"><a href="/calendar">Calendar</a></li>
    //     <li className="address"><a href="/addressbook">Address Book</a></li>
    //     <li className="map"><a href="/map">Map</a></li>
    //     <li className="forms"><a href="/forms">Forms</a></li>
    //     <li className="logout"><a href="/">Logout</a></li>
    //     <form>
    //     <input type="text" placeholder="Search.." name="search"/>
    //     <button type="submit">Submit</button>
    //     </form>
    //   </ul>
    //   <div className="search-container">

    //   </div>
    // </nav>
    <div className="topnav">
  <a href="/">Home</a>
  <a href="/calendar">Calendar</a>
  <a href="/addressbook">Address Book</a>
  <a href="/map">Map</a>
  <a href="/forms">Forms</a>
  <a href="/">Logout</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  );
}
export default Navbar;