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
import { withStyles } from '@material-ui/core/styles';
import { white } from '@material-ui/core/colors';
import W9CheckBox from '../contractor/form/W9CheckBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const styles = (theme) => ({
	cardHeader: {
		background: `#4caf50`,
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

const contractorStand = [
	{
		value: 'Good'
	},
	{
		value: 'Testing'
	},
	{
		value: 'Bad'
	},
	{
		value: 'Issues'
	}
];

class ContractCard extends React.Component {
	state = {
		contractorStand: '',
		country: '',
		value: '',
		editable: false,
		conFirstName: this.props.conFirstName,
		conLastName: this.props.conLastName,
		conPhone: this.props.conPhone,
		conEmail: this.props.conEmail,
		conCert: this.props.conCert,
		conPrice: this.props.conPrice,
		conNotes: this.props.conNotes,
		conLocationName: this.props.conLocationName,
		conStreetAddress: this.props.conStreetAddress,
		conCity: this.props.conCity,
		conState: this.props.conState,
		conZipCode: this.props.conZipCode
	};

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleEditMode = () => {
		this.setState({
			editable: true
		});
	};

	// handleInputChange = event => {
	//     console.log("working")
	//     const value = event.target;
	//     this.setState({
	//         [value]: event.target.value
	//     });
	// };

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	componentWillReceiveProps = (nextProps) => {
		this.setState({
			...nextProps
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<ExpansionPanel>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<AppBar position='static' className={classes.cardHeader}>
							<Toolbar>
								<Typography variant='h6' color='inherit' className={classes.grow}>
									{this.props.conFirstName} {this.props.conLastName}
								</Typography>
								<Button color='inherit' onClick={this.handleEditMode}>
									Edit
								</Button>
							</Toolbar>
						</AppBar>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<form className={classes.container} noValidate autoComplete='off'>
							<Grid container spacing={24} direction='row' justify='center' alignItems='flex-start'>
								<Grid item sm={12} md={11} lg={5}>
									<TextField
										fullWidth
										id='outlined-name'
										label='First Name'
										className={classes.textField}
										value={this.props.conFirstName}
										name='conFirstName'
										margin='normal'
										variant='outlined'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
										// fullWidth
									/>
								</Grid>
								<Grid item sm={12} md={11} lg={6}>
									<TextField
										fullWidth
										id='outlined-name'
										label='Last Name'
										className={classes.textField}
										value={this.state.conLastName}
										name='conLastName'
										margin='normal'
										variant='outlined'
										fullWidth
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>
								<Grid item sm={12} md={5} lg={5}>
									<TextField
										fullWidth
										id='outlined-number'
										label='Phone Number'
										value={this.state.conPhone}
										name='conPhone'
										type='Phone Number'
										className={classes.textField}
										InputLabelProps={{
											shrink: true
										}}
										margin='normal'
										variant='outlined'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>
								<Grid item sm={12} md={6} lg={6}>
									<TextField
										id='outlined-email-input'
										label='Email'
										className={classes.textField}
										fullWidth
										type='email'
										name='conEmail'
										autoComplete='email'
										margin='normal'
										variant='outlined'
										value={this.state.conEmail}
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>
								<Grid item sm={12} md={11} lg={11}>
									<TextField
										select
										id='outlined-with-placeholder'
										label='Contractor Standing'
										className={classes.textField}
										fullWidth
										value={this.state.conStand}
										onChange={this.handleChange('contractorStand')}
										SelectProps={{
											MenuProps: {
												className: classes.menu
											}
										}}
										helperText='Choose one'
										margin='normal'
										variant='outlined'>
										{contractorStand.map((option) => (
											<MenuItem key={option.value} value={option.value}>
												{option.value}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								<Grid item sm={4} md={3} lg={3}>
									<W9CheckBox />
								</Grid>

								<Grid item sm={8} md={8} lg={8}>
									<TextField
										id='outlined-full-width'
										label='Type of Certifcation / Numbers'
										placeholder='Type of Certifcation / Numbers'
										value={this.state.conCert}
										name='conCert'
										fullWidth
										margin='normal'
										variant='outlined'
										InputLabelProps={{
											shrink: true
										}}
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-full-width'
										label='Pricing'
										placeholder='Pricing'
										value={this.state.conPrice}
										name='conPrice'
										fullWidth
										margin='normal'
										variant='outlined'
										InputLabelProps={{
											shrink: true
										}}
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-multiline-static'
										label='Notes'
										multiline
										fullWidth
										rows='10'
										defaultValue='Default Value'
										className={classes.textField}
										margin='normal'
										variant='outlined'
										value={this.state.conNotes}
										name='conNotes'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
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
										id='outlined-helperText'
										label='Location Name'
										defaultValue='Location Name'
										fullWidth
										className={classes.textField}
										margin='normal'
										variant='outlined'
										value={this.state.conLocationName}
										name='conLocationName'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={11} lg={11}>
									<TextField
										id='outlined-helperText'
										label='Street Address'
										defaultValue='Street Address'
										fullWidth
										className={classes.textField}
										margin='normal'
										variant='outlined'
										value={this.state.conStreetAddress}
										name='conStreetAddress'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={3} lg={3}>
									<TextField
										fullWidth
										id='outlined-helperText'
										label='City'
										defaultValue='City'
										className={classes.textField}
										margin='dense'
										variant='outlined'
										value={this.state.conCity}
										name='conCity'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>

								<Grid item sm={12} md={3} lg={3}>
									<TextField
										id='outlined-helperText'
										label='State/Province'
										defaultValue='State'
										className={classes.textField}
										margin='dense'
										variant='outlined'
										fullWidth
										value={this.state.conState}
										name='conState'
										disabled={!this.state.editable}
										onChange={this.handleInputChange}
									/>
								</Grid>
								{/* // justify="flex-end" // alignItems="flex-start" */}

								<Grid item sm={12} md={3} lg={3}>
									<TextField
										id='outlined-helperText'
										label='Postal / Zip Code'
										fullWidth
										defaultValue='Zip Code'
										className={classes.textField}
										margin='dense'
										variant='outlined'
										value={this.state.conZipCode}
										name='conZipCode'
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

ContractCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContractCard);
