import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import "./style.css";
import Forms from "../Forms";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function Navbar(props) {
  return (
    <div className="topnav">
      <div>
        <a href="/">Home</a>
        <a href="/calendar">Calendar</a>
        <a href="/addressbook">Address Book</a>
        <a href="/map">Map</a>
        <a href="/forms">Forms</a>
        <a href="/">Logout</a>
      </div>

      <Forms />

      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={props.value}
          onChange={props.onChange}
        />
        <button onClick={props.onClick} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Navbar);
