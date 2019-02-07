import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { TextField, Grid, Button, withStyles, Typography, Paper, CssBaseline, Avatar } from '@material-ui/core';
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

function SignIn(props) {
	const { classes, onSubmit, onChange, user } = props;

	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form onSubmit={onSubmit} className={classes.form}>
					<Grid item sm={12}>
						<TextField
							fullWidth
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
							fullWidth
							label='password'
							name='password'
							margin='normal'
							variant='outlined'
							type='password'
							onChange={onChange}
							value={user.password}
						/>
					</Grid>

					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
						Sign in
					</Button>
				</form>
			</Paper>
		</main>
	);
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
