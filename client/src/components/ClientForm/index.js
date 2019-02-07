import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button, Typography, MenuItem, TextField, Grid, AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import API from '../../utils/API';

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	grow: {
		flexGrow: 1
	},
	root: {
		flexGrow: 1
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
	},
	card: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

const clientType = [
	{
		value: 'Investigation'
	},
	{
		value: 'Workers Compensation'
	},
	{
		value: 'Insurance'
	},
	{
		value: 'Custom'
	}
];

class ClientCard extends React.Component {
	state = {
		clientName: '',
		// phone: "",
		// email: "",
		position: '',
		notes: '',
		contactPerson: {
			firstName: '',
			lastName: '',
			phone: '',
			email: ''
			// position: ""
		},
		clientType: '',
		billing: {
			contactBilling: {
				name: '',
				phone: '',
				email: ''
				// position: ""
			},
			location: {
				// locationName: "",
				address: '',
				city: '',
				state: '',
				zipCode: ''
			}
		}
	};

	handleChange = (name) => (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});

		// setTimeout(() => {
		// console.log(this.state);
		// }, 500);
	};

	handleContactChange = (event) => {
		const field = event.target.name;

		const contactPerson = this.state.contactPerson;

		contactPerson[field] = event.target.value;

		this.setState({
			contactPerson
		});
		// console.log(this.state);
	};

	handleBillingChange = (event) => {
		const field = event.target.name;
		const billing = this.state.billing;
		const { contactBilling, location } = billing;

		contactBilling[field] = event.target.value;
		location[field] = event.target.value;

		this.setState({ billing: { contactBilling, location } });
		// console.log(this.state);
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		// const { contactPerson } = this.state;
		// const { contactBilling, location } = this.state.billing.;
		console.log(this.state);
		API.saveClient({
			clientName: this.state.clientName,
			// phone: this.state.phone,
			// email: this.state.email,
			position: this.state.position,
			notes: this.state.notes,
			contactPerson: {
				firstName: this.state.contactPerson.firstName,
				lastName: this.state.contactPerson.lastName,
				phone: this.state.contactPerson.phone,
				email: this.state.contactPerson.email
				// position: contactPerson.position
			},
			clientType: this.state.clientType,
			billing: {
				contactBilling: {
					name: this.state.billing.contactBilling.name,
					phone: this.state.billing.contactBilling.phone,
					email: this.state.billing.contactBilling.email
					// position: contactBilling.position
				},
				location: {
					address: this.state.billing.location.address,
					city: this.state.billing.location.city,
					state: this.state.billing.location.state,
					zipCode: this.state.billing.location.zipCode
				}
			}
		}).then((res) => {
			console.log(res.data);
			this.setState({
				clientName: '',
				// phone: "",
				// email: "",
				position: '',
				notes: '',
				contactPerson: {
					firstName: '',
					lastName: '',
					phone: '',
					email: ''
					// position: ""
				},
				clientType: '',
				billing: {
					contactBilling: {
						name: ' ',
						phone: '',
						email: ''
						// position: ""
					},
					location: {
						// locationName: "",
						address: '',
						city: ' ',
						state: '',
						zipCode: ''
					}
				}
			});
		});

		console.log(this.state);
	};

	render() {
		const { classes } = this.props;
		const { contactPerson } = this.state;
		const { contactBilling, location } = this.state.billing;

		return (
			<div className={classes.root}>
				<Grid container item xs={12}>
					<Card className={classes.card}>
						<CardContent>
							<AppBar position='static' className={classes.cardHeader}>
								<Toolbar>
									<Typography variant='h6' color='inherit' className={classes.grow}>
										Client Contact Card
									</Typography>
									{/* <Button color="inherit">Edit</Button> */}
								</Toolbar>
							</AppBar>
							<form className={classes.container} noValidate autoComplete='off' onSubmit={this.handleFormSubmit}>
								<Grid container spacing={24} direction='row' justify='center' alignItems='flex-start'>
									<Grid item xs={4}>
										<Grid container direction='row' justify='flex-end' alignItems='flex-start'>
											<Grid item xs={6}>
												<TextField
													id='outlined-name'
													label='First Name'
													className={classes.textField}
													name='firstName'
													value={contactPerson.firstName}
													onChange={this.handleContactChange}
													margin='normal'
													variant='outlined'
													fullWidth
												/>
											</Grid>

											<Grid item xs={6}>
												<TextField
													id='outlined-name'
													label='Last Name'
													className={classes.textField}
													name='lastName'
													value={contactPerson.lastName}
													onChange={this.handleContactChange}
													margin='normal'
													variant='outlined'
													fullWidth
												/>
											</Grid>
										</Grid>
										<TextField
											id='outlined-number'
											label='Phone Number'
											name='phone'
											value={contactPerson.phone}
											onChange={this.handleContactChange}
											type='Phone Number'
											className={classes.textField}
											InputLabelProps={{
												shrink: true
											}}
											margin='normal'
											variant='outlined'
										/>
										<TextField
											id='outlined-email-input'
											label='Email'
											className={classes.textField}
											fullWidth
											type='email'
											name='email'
											value={contactPerson.email}
											onChange={this.handleContactChange}
											autoComplete='email'
											margin='normal'
											variant='outlined'
										/>
										<TextField
											select
											id='outlined-with-placeholder'
											label='Type of Client'
											className={classes.textField}
											fullWidth
											value={this.state.clientType}
											name='clientType'
											onChange={this.handleChange('clientType')}
											SelectProps={{
												MenuProps: {
													className: classes.menu
												}
											}}
											helperText='Choose one'
											margin='normal'
											variant='outlined'>
											{clientType.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.value}
												</MenuItem>
											))}
										</TextField>
									</Grid>
									<Grid item xs={4}>
										<TextField
											id='clientName'
											label='Company / Client Name'
											placeholder='Company / Client Name'
											name='clientName'
											value={this.state.clientName}
											onChange={this.handleChange()}
											fullWidth
											margin='normal'
											variant='outlined'
											InputLabelProps={{
												shrink: true
											}}
										/>
										<TextField
											id='outlined-full-width'
											label='Position'
											placeholder='Position'
											fullWidth
											margin='normal'
											variant='outlined'
											name='position'
											value={this.state.position}
											onChange={this.handleChange()}
											InputLabelProps={{
												shrink: true
											}}
										/>
										<TextField
											id='outlined-multiline-static'
											label='Notes'
											name='notes'
											value={this.state.notes}
											onChange={this.handleChange()}
											multiline
											fullWidth
											rows='10'
											defaultValue='Default Value'
											className={classes.textField}
											margin='normal'
											variant='outlined'
										/>
									</Grid>
									<Grid item xs={3}>
										<TextField
											id='outlined-read-only-input'
											defaultValue='Billing Information'
											className={classes.textField}
											fullWidth
											margin='normal'
											InputProps={{
												readOnly: true
											}}
											variant='outlined'
										/>
										<TextField
											id='outlined-helperText'
											label='Contact Name'
											name='name'
											value={contactBilling.name}
											onChange={this.handleBillingChange}
											fullWidth
											className={classes.textField}
											margin='normal'
											variant='outlined'
										/>

										<TextField
											id='outlined-number'
											label='Billing Phone Number'
											name='phone'
											value={contactBilling.phone}
											onChange={this.handleBillingChange}
											type='Phone Number'
											className={classes.textField}
											InputLabelProps={{
												shrink: true
											}}
											margin='normal'
											variant='outlined'
										/>

										<TextField
											id='outlined-email-input'
											label='Billing Email'
											className={classes.textField}
											fullWidth
											type='email'
											name='email'
											value={contactBilling.email}
											onChange={this.handleBillingChange}
											autoComplete='email'
											margin='normal'
											variant='outlined'
										/>

										<TextField
											id='outlined-helperText'
											label='Street Address'
											defaultValue='Street Address'
											fullWidth
											className={classes.textField}
											margin='normal'
											variant='outlined'
											name='address'
											value={location.address}
											onChange={this.handleBillingChange}
										/>
										<Grid container direction='row' justify='flex-end' alignItems='flex-start'>
											<TextField
												id='outlined-helperText'
												label='City'
												defaultValue='City'
												className={classes.textField}
												margin='normal'
												variant='outlined'
												name='city'
												value={location.city}
												onChange={this.handleBillingChange}
											/>
											<Grid item xs>
												<TextField
													id='outlined-helperText'
													label='State/Province'
													defaultValue='State'
													className={classes.textField}
													margin='normal'
													variant='outlined'
													fullWidth
													name='state'
													value={location.state}
													onChange={this.handleBillingChange}
												/>
											</Grid>
										</Grid>
										<Grid container direction='row' justify='flex-end' alignItems='flex-start'>
											<Grid item xs>
												<TextField
													id='outlined-helperText'
													label='Postal / Zip Code'
													defaultValue='Zip Code'
													className={classes.textField}
													margin='normal'
													variant='outlined'
													name='zipCode'
													value={location.zipCode}
													onChange={this.handleBillingChange}
												/>
											</Grid>
											<Grid item xs>
												<Button variant='contained' color='inherit' type='submit'>
													Submit
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</form>
						</CardContent>
					</Card>
				</Grid>
			</div>
		);
	}
}

ClientCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientCard);
