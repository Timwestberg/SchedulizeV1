import React from 'react';
import {
	AppBar,
	Toolbar,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Typography,
	TextField,
	Grid,
	Fab
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { white } from '@material-ui/core/colors';
import { Accessibility, ExpandMore } from '@material-ui/icons';
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import API from '../../utils/API';

const styles = {
	card: {
		minWidth: 300,
		minHeight: 200
		// justifyContent: "center",
	},
	cardHeader: {
		background: `#dfafea`,
		color: white
	},
	cardContent: {
		width: '100%'
	},
	input: {
		minWidth: '100%'
	},
	hCenter: {
		display: 'flex'
		// alignItems: "center"
		// justifyContent: "center"
	},
	fab: {
		display: 'flex'
		// justifyContent:
	}
};

class NewAppointmentCard extends React.Component {
	state = {
		dateInput: '',
		apptDate: '',
		assigneeFirstName: '',
		assigneeLastName: '',
		// assigneePhone: "",
		adjusterFirstName: '',
		adjusterLastName: '',
		// adjusterPhone: "",
		// assignementType: "",
		// multiline: "",
		refName: '',
		refNumber: '',
		locationName: '',
		address: '',
		city: '',
		state: '',
		postalCode: '',
		apptID: ''
		// employeeAssign: ""
	};

	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.checked });
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	captureapptID = (data) => {
		this.setState({
			container: data
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		API.saveAppt({
			dateInput: this.state.dateInput,
			apptDate: this.state.apptDate,
			assigneeFirstName: this.state.assigneeFirstName,
			assigneeLastName: this.state.assigneeLastName,
			// assigneePhone: this.state.assigneePhone,
			adjusterFirstName: this.state.adjusterFirstName,
			adjusterLastName: this.state.adjusterLastName,
			// adjusterPhone: this.state.adjusterPhone,
			// assignementType: this.state.assignementType,
			// notes: this.state.multiline,
			refName: this.state.refName,
			refNumber: this.state.refNumber,
			locationName: this.state.locationName,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			postalCode: this.state.postalCode,
			apptID: this.state._id
			// employeeAssign: this.state.employeeAssign
		});
		console.log(this.state);
	};

	render(props) {
		const { classes } = this.props;
		return (
			<div>
				<ExpansionPanel>
					<ExpansionPanelSummary expandIcon={<ExpandMore />}>
						<AppBar position='static'>
							<Toolbar>
								<Typography variant='h6' color='inherit' className={classes.grow}>
									{/* I cant pull apptDate into the label of the exandable panel */}
									{this.props.refName} {this.props.refNumber} {this.props.apptDate}
								</Typography>
							</Toolbar>
						</AppBar>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container item xs={12}>
							<form className={classes.input} autoComplete='off' onSubmit={this.handleFormSubmit}>
								<Grid container spacing={16}>
									{/* Date the appointment was called in to be assigned */}
									<Grid item xs={6}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<DatePicker
												fullWidth
												showTodayButton
												label='Date Assigned'
												variant='outlined'
												value={this.props.dateInput}
											/>
										</MuiPickersUtilsProvider>
									</Grid>
									{/* Date the assignment will be taking place on */}

									<Grid item xs={6}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<DateTimePicker
												showTodayButton
												fullWidth
												label='Appointment Date'
												variant='outlined'
												value={this.props.apptDate}
											/>
										</MuiPickersUtilsProvider>
									</Grid>

									{/* Who will is assigning the assignment */}
									{/* Assignee Last Name for searchability purposes */}
									<Grid item xs={12} md={6} lg={6}>
										<TextField
											fullWidth
											id='assigneeFirstName'
											label='Assignee&#39;s First Name'
											className={classes.textField}
											name='assigneeFirstName'
											value={this.props.assigneeFirstName}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									<Grid item xs={12} md={6} lg={6}>
										<TextField
											id='assigneeLastName'
											fullWidth
											label='Assignee&#39;s Last Name'
											name='assigneeLastName'
											className={classes.textField}
											value={this.props.assigneeLastName}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									{/* <Grid item xs={12}>
                    <PhoneNumber phone={this.state.assigneePhone} />
                  </Grid> */}
									{/* Assignee's phone number to contact in case their our questions[???] */}
									<br />

									{/* Contact information for person paying for the assignment {typically an adjuster} */}

									{/* Reference Name for the file || Name need in order to bill out the assignment */}
									{/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}

									<Grid item xs={12} md={6} lg={6}>
										<TextField
											fullWidth
											id='adjusterFirstName'
											label='Adjuster&#39;s First Name'
											className={classes.textField}
											name='adjusterFirstName'
											value={this.props.adjusterFirstName}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									<Grid item xs={12} md={6} lg={6}>
										<TextField
											fullWidth
											id='adjusterLastName'
											label='Adjuster&#39;s Last Name'
											className={classes.textField}
											name='adjusterLastName'
											value={this.props.adjusterLastName}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									{/* <Grid item xs={12}>
                    <PhoneNumber />
                  </Grid> */}

									<br />

									{/* Drop down selector with types off appointments to choose from */}
									{/* <Grid item xs={12}>
                    <Type />
                  </Grid> */}
									<br />

									{/* Notes section in case the client has special requests that need to be followed */}

									{/* <Grid item xs={8}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Notes"
                      multiline
                      fullWidth
                      rowsMax="2"
                      name="multiline"
                      value={this.state.multiline}
                      onChange={this.handleChange("multiline")}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleInputChange}
                    />
                  </Grid> */}

									<Grid item xs={6}>
										<TextField
											fullWidth
											id='Refname'
											label='Reference Name'
											className={classes.textField}
											name='refName'
											value={this.props.refName}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									<Grid item xs={6}>
										<TextField
											fullWidth
											id='Refname'
											label='Reference Number'
											className={classes.textField}
											name='refNumber'
											value={this.props.refNumber}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
										/>
									</Grid>

									{/* Assignment location information */}

									{/* Assignment location information */}
									<Grid item xs={12}>
										<TextField
											id='outlined-helperText'
											label='Location Name'
											fullWidth
											className={classes.textField}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
											name='locationName'
											value={this.props.locationName}
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											fullWidth
											id='outlined-helperText'
											label='Street Address'
											className={classes.textField}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
											name='address'
											value={this.props.address}
										/>
									</Grid>

									<Grid item xs={6}>
										<TextField
											fullWidth
											id='outlined-helperText'
											label='City'
											className={classes.textField}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
											name='city'
											value={this.props.city}
										/>
									</Grid>

									<Grid item xs={6}>
										<TextField
											fullWidth
											id='outlined-helperText'
											label='State/Province'
											className={classes.textField}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
											name='state'
											value={this.props.state}
										/>
									</Grid>

									<Grid item xs={6}>
										<TextField
											fullWidth
											id='outlined-helperText'
											label='Postal / Zip Code'
											className={classes.textField}
											margin='normal'
											variant='outlined'
											onChange={this.handleInputChange}
											name='postalCode'
											value={this.props.postalCode}
										/>
									</Grid>

									{/* Which contractor will be covering the assignment */}
									{/* Date the contractor accepted the job || to avoid future problems */}

									{/* Name of the employee who assisted in taking the assignment */}
									<Grid item xs={12}>
										{/* <EmployeeAssisting /> */}
									</Grid>

									{/* Add Button to save the assignment to the database */}
									<Grid item xs={6}>
									{/* call icon in with fab */}
										<Fab aria-label='accessibility' className={classes.fab} type='submit' onClick={this.captureapptID}>
											<Accessibility />
										</Fab>
									</Grid>
								</Grid>
							</form>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

export default withStyles(styles)(NewAppointmentCard);
