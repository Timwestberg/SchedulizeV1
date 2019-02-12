import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios';
import PropTypes from 'prop-types';
// import FloatingActionButtons from "./FloatButtons";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './style.css';
// import './searchy.css';
const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	}
});

class ApptSearch extends Component {
	state = {
		query: '',
		results: {
			appts: []
		}
	};

	getInfo = () => {
		// API.getAppts().then(appts => console.log("appts:"+appts.data));
		API.searchAppts(this.state.query).then((appts) => {
			console.log('appts:ms' + appts.data);
			this.props.onSearchChange(appts.data);
		});
	};

	handleInputChange = () => {
		this.setState(
			{
				query: this.search.value
			},
			() => {
				this.getInfo();
			}
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<form>
				<input
					className='selSearch'
					placeholder='Search for...'
					ref={(input) => (this.search = input)}
					onChange={this.handleInputChange}
				/>

				{/* <TextField
					// id='outlined-full-width'
					label='Search addressbook'
					ref={(input) => (this.search = input)}
					onChange={this.handleInputChange}
					helperText='Use to search Address Book'
					className={classes.textField}
					fullWidth
					margin='normal'
					variant='outlined'
					// InputLabelProps={{
					// 	shrink: true
					// }}
				/> */}
			</form>
		);
	}
}

export default withStyles(styles)(ApptSearch);
