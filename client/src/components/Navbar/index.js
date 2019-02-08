import React from 'react';
import TextField from '@material-ui/core/TextField';
import ClientSearch from '../Searchy/clientSearchy.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './style.css';
import Forms from '../Forms';
import ApptSearch from '../Searchy/appointmentSearchy.js';
import ContractorSearch from '../Searchy/contractorSearchy.js';

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	}
});

function Navbar(props) {
	return (
		<div className='topnav'>
			<a href='/'>Home</a>
			<a href='/calendar'>Calendar</a>
			<a href='/addressbook'>Address Book</a>
			<a href='/map'>Map</a>
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
				<input type='text' placeholder='Search..' name='search' value={props.value} onChange={props.onChange} />
				<button onClick={props.onClick} type='submit'>
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
