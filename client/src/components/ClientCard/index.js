import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Typography,
	MenuItem,
	TextField,
	Grid,
	AppBar,
	Toolbar,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from '@material-ui/core';
import { white } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import API from '../../utils/API';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';

const styles = (theme) => ({
	cardHeader: {
		background: `#f57c00`,
		color: white
	},
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
		clients: [],
		clientType: this.props.clientType,
		country: '',
		editable: false,
		clientFirstName: this.props.clientFirstName,
		clientLastName: this.props.clientLastName,
		billContact: this.props.billContact,
		clientPhone: this.props.clientPhone,
		clientEmail: this.props.clientEmail,
		companyName: this.props.companyName,
		position: this.props.position,
		billPhone: this.props.billPhone,
		billEmail: this.props.billEmail,
		clientCity: this.props.clientCity,
		clientState: this.props.clientState,
		// clientStreetNumber: this.props.clientStreetNumber,
		clientStreetName: this.props.clientStreetName,
		clientZipCode: this.props.clientZipCode,
		idToUpdate: this.props.idToUpdate,
		objectToUpdate: {}
	};

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleEditMode = () => {
		this.setState({
			editable: true
		});
	};

	//work in progress for update
	updateDB = (idToUpdate) => {
		const id = this.state.clients.findEach((client) => client._id === idToUpdate);
		console.log(id);
		API.updateClient({
			clientFirstName: this.state.clientFirstName
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<ExpansionPanel className='clientPanel'>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<AppBar position='static' className={classes.cardHeader}>
							<Toolbar>
								<Typography variant='h6' color='inherit' className={classes.grow}>
									{this.state.clientFirstName} {this.state.clientLastName} {this.state.companyName}
								</Typography>
								<Button color='inherit' onClick={this.handleEditMode}>
									Edit
								</Button>
								<Button
									color='inherit'
									onClick={() => this.updateDB(this.state.idToUpdate, this.state.updateToApply)}
									disabled={!(this.state.clientFirstName && this.state.clientLastName)}>
									Submit
								</Button>
							</Toolbar>
						</AppBar>
					</ExpansionPanelSummary>{' '}
					<ExpansionPanelDetails>
						<form className={classes.container} noValidate autoComplete='off'>
							<Grid container spacing={24} direction='row' justify='center' alignItems='flex-start'>
								<Grid item sm={12} md={11} lg={5}>
									<TextField
										fullWidth
										id='outlined-name'
										label='First Name'
										className={classes.textField}
										value={this.state.clientFirstName}
										margin='dense'
										variant='outlined'
										name='clientFirstName'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										// fullWidth
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={6}>
									<TextField
										id='outlined-name'
										label='Last Name'
										className={classes.textField}
										value={this.state.clientLastName}
										margin='densel'
										variant='outlined'
										fullWidth
										name='clientLastName'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={5}>
									<TextField
										fullWidth
										id='outlined-number'
										label='Phone Number'
										value={this.state.clientPhone}
										type='Phone Number'
										className={classes.textField}
										InputLabelProps={{
											shrink: true
										}}
										margin='normal'
										variant='outlined'
										name='clientPhone'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={6}>
									<TextField
										id='outlined-email-input'
										label='Email'
										className={classes.textField}
										fullWidth
										type='email'
										autoComplete='email'
										margin='normal'
										variant='outlined'
										value={this.state.clientEmail}
										name='clientEmail'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										select
										id='outlined-with-placeholder'
										label='Type of Client'
										className={classes.textField}
										fullWidth
										value={this.state.clientType}
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

								<Grid item sm={12} md={11} lg={5}>
									<TextField
										id='outlined-full-width'
										label='Company / Client Name'
										placeholder='Company / Client Name'
										value={this.state.companyName}
										name='companyName'
										fullWidth
										margin='dense'
										variant='outlined'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										InputLabelProps={{
											shrink: true
										}}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={6}>
									<TextField
										id='outlined-full-width'
										label='Position'
										placeholder='Position'
										fullWidth
										margin='dense'
										variant='outlined'
										value={this.state.position}
										name='position'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										InputLabelProps={{
											shrink: true
										}}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-multiline-static'
										label='Notes'
										multiline
										fullWidth
										rows='10'
										className={classes.textField}
										margin='normal'
										variant='outlined'
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
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
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-full-width'
										label='Billing Contact Person'
										placeholder='Billing Contact Person'
										value={this.state.billContact}
										name='billContact'
										fullWidth
										margin='normal'
										variant='outlined'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										InputLabelProps={{
											shrink: true
										}}
									/>
								</Grid>

								{/* <TextField
									id='outlined-helperText'
									label='Contact Name'
									value={this.state.billContact}
									value={this.props.billContact}
									name='billContact'
									fullWidth
									className={classes.textField}
									margin='normal'
									variant='outlined'
									disabled={!this.state.editable}
									onChange={this.handleInputChange}
								/> */}

								<Grid item sm={12} md={11} lg={5}>
									<TextField
										fullWidth
										id='outlined-number'
										label='Billing Phone Number'
										value={this.props.billPhone}
										name='billPhone'
										type='Phone Number'
										className={classes.textField}
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										InputLabelProps={{
											shrink: true
										}}
										margin='dense'
										variant='outlined'
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={6}>
									<TextField
										id='outlined-email-input'
										label='Billing Email'
										className={classes.textField}
										fullWidth
										type='email'
										name='billEmail'
										autoComplete='email'
										margin='dense'
										variant='outlined'
										value={this.state.billEmail}
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-helperText'
										label='Street Address'
										// defaultValue="Street Address"
										fullWidth
										className={classes.textField}
										margin='normal'
										variant='outlined'
										//have to make street number and name one property to make it editable
										value={this.state.clientStreetName}
										name='clientStreetNumber clientStreeName'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={4} lg={3}>
									<TextField
										fullWidth
										id='outlined-helperText'
										label='City'
										// defaultValue="City"
										className={classes.textField}
										margin='dense'
										variant='outlined'
										value={this.state.clientCity}
										name='clientCity'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={4} lg={3}>
									<TextField
										id='outlined-helperText'
										label='State/Province'
										// defaultValue="State"
										className={classes.textField}
										margin='dense'
										variant='outlined'
										fullWidth
										value={this.state.clientState}
										name='clientState'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={4} lg={3}>
									<TextField
										fullWidth
										id='outlined-helperText'
										label='Postal / Zip Code'
										// defaultValue="Zip Code"
										className={classes.textField}
										margin='dense'
										variant='outlined'
										value={this.state.clientZipCode}
										name='clienZipCode'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>
							</Grid>
						</form>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		);
	}
}

ClientCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientCard);
