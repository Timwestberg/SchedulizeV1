import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import Forms from '../Forms';
import { withStyles, AppBar, Toolbar, Typography, MenuItem, Menu, Grid } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import AccountCircle from '@material-ui/icons/AccountCircle';
const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	input: {
		display: 'none'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1,
		color: 'white'
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	link: {
		textDecoration: 'none'
	}
});

class NavBar extends React.Component {
	state = {
		auth: true,
		anchorEl: null
	};

	handleChange = (event) => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<Grid
				container
				spacing={16}
				direction='row'
				justify='space-evenly'
				alignItems='center'
				className={classes.root}>
				<AppBar position='static'>
					<Toolbar>
						<Grid item xs>
							<Typography align='center' variant='h6' color='inherit' className={classes.grow}>
								Schedulize
							</Typography>
						</Grid>

						<Grid item xs>
							<MenuItem onClick={() => this.props.handlePageChange('Calendar')}>
								<Typography align='center' variant='h6' color='inherit' className={classes.grow}>
									Calendar
								</Typography>
							</MenuItem>
						</Grid>

						<Grid item xs>
							<MenuItem align='center' onClick={() => this.props.handlePageChange('AddressBook')}>
								<Typography align='center' variant='h6' color='inherit' className={classes.grow}>
									AddressBook
								</Typography>
							</MenuItem>
						</Grid>

						<Grid item xs>
							<MenuItem align='center' onClick={() => this.props.handlePageChange('Map')}>
								<Typography align='center' variant='h6' color='inherit' className={classes.grow}>
									Map
								</Typography>
							</MenuItem>
						</Grid>

						<Grid item xs>
							<Forms />
						</Grid>

						<div>
							<Grid item xs>
								<Tooltip title='Options' placement='left-start'>
									<IconButton
										aria-owns={open ? 'menu-appbar' : undefined}
										aria-haspopup='true'
										onClick={this.handleMenu}
										color='inherit'>
										<AccountCircle />
									</IconButton>
								</Tooltip>
							</Grid>

							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={this.handleClose}>
								<MenuItem>
									<Link className={classes.link} to={'/addUser'}>
										Add User
									</Link>
								</MenuItem>
								<MenuItem>
									<Link className={classes.link} to={'/'}>
										Logout
									</Link>
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</Grid>
		);
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
