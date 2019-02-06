import React from "react";
import TextField from '@material-ui/core/TextField';
import Search from "../Searchy";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "./style.css";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

function Navbar(props) {

  return (
  <div className="topnav">
  <a href="/">Home</a>
  <a href="/calendar">Calendar</a>
  <a href="/addressbook">Address Book</a>
  <a href="/map">Map</a>
  <a href="/forms">Forms</a>
  <a href="/">Logout</a>
  <br/>
  <Search />
  {/* <div className="search-container">
      <input type="text" placeholder="Search.." name="search" value={props.value} onChange={props.onChange}/>
      <button onClick={props.onClick} type="submit">Submit</button>
  </div> */}
</div>
  );

}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
