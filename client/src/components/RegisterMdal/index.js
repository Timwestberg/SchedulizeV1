import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Card, CardHeader, TextField, Grid, Fab, CardContent, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
	main: {
		width: '80%',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit
	},
	submit: {
		marginTop: theme.spacing.unit * 3
	}
});

function SignUpForm(props) {
	const { classes, onSubmit, onChange, user } = props;

	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Add User
				</Typography>
				<form onSubmit={onSubmit}>
					<CardContent>
						{/* This is for the name of the User */}
						<Grid item sm={12}>
							<TextField
								onChange={onChange}
								value={user.name}
								label='name'
								name='name'
								margin='normal'
								variant='outlined'
								type='text'
							/>
						</Grid>

						<Grid item sm={12}>
							<TextField
								label='username'
								name='username'
								margin='normal'
								type='text'
								variant='outlined'
								onChange={onChange}
								value={user.username}
							/>
						</Grid>
						<Grid item sm={12}>
							<TextField
								label='password'
								name='password'
								margin='normal'
								variant='outlined'
								type='password'
								onChange={onChange}
								value={user.password}
							/>
							{/* {submitted && !user.password && <div classname='help-block'>password is required</div>} */}
						</Grid>

						<Grid item sm={12} md={12} lg={12}>
							<Button type='submit' variant='contained' color='primary'>
								<AddIcon />
								{'Register'}
							</Button>

							<Button variant='contained' color='secondary'>
								<Link to='/'>{'Cancel '}</Link>
							</Button>
						</Grid>
					</CardContent>
				</form>
			</Paper>
		</main>
	);
}

SignUpForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpForm);
