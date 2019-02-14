import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import "./style.css";
import Forms from "../Forms";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

function Navbar(props) {
  return (
    <div className='topnav'>
			{/* <a href='/'>Home</a> */}
			{/* first way */}
      {/* <Link to={"/calendar"}>
        <a onClick={() => props.handlePageChange("Calendar")}>Calendar</a>
      </Link>
      <Link to={"/addressbook"}>
        <a onClick={() => props.handlePageChange("AddressBook")}>
          Address Book
        </a>
      </Link>
      <Link to={"/map"}>
        <a onClick={() => props.handlePageChange("Map")}>Map</a>
      </Link> */}

			{/* second way */}
        <a onClick={() => props.handlePageChange("Calendar")}>Calendar</a>
        <a onClick={() => props.handlePageChange("AddressBook")}>
          Address Book
        </a>
        <a onClick={() => props.handlePageChange("Map")}>Map</a>

      <a href='/'>Logout</a>
      <br />
      {/* <div className="search-container">
      <input type="text" placeholder="Search.." name="search" value={props.value} onChange={props.onChange}/>
      <button onClick={props.onClick} type="submit">Submit</button>
  </div> */}
      {/* </div>
  ); */}

      <Forms />

      <div className='search-container'>
        <TextField
          type='text'
          id='outlined-search'
          label='Search Location'
          name='search'
          type='search'
          value={props.value}
          className={props.classes.textField}
          onChange={props.onChange}
          margin='normal'
          variant='outlined'
        />
        <Button
          variant='contained'
          onClick={props.onClick}
          type='submit'
          id='SearchButton'
          className={props.classes.button}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Navbar);
