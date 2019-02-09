import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ClientCard from '../components/ClientCard';
import ContractCard from '../components/ContractCard';
import AppointmentCard from '../components/AppointmentCard';
import API from '../utils/API';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ClientSearch from '../components/Searchy/clientSearchy';
import ApptSearch from '../components/Searchy/appointmentSearchy';
import ContractorSearch from '../components/Searchy/contractorSearchy';

function TabContainer({ children, dir }) {
	return (
		<Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
			{children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
	dir: PropTypes.string.isRequired
};

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100%'
	}
});

class Address extends Component {
	state = {
		value: 0,
		clients: [],
		contractors: [],
		appointments: []
	};

	componentDidMount() {
		this.loadContractors();
		this.loadClients();
		this.loadAppointments();
	}

	// componentDidUpdate() {
	//   this.loadAppointments();
	// }

	loadClients = () => {
		API.getClients()
			.then((res) => {
				console.log(res.data);
				this.setState({
					clients: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	//these 3 allow us to access db to search
	changeClientSearch = (data) => {
		this.setState({
			clients: data
		});
	};

	changeApptSearch = (data) => {
		this.setState({
			appointments: data
		});
	};

	changeContractorSearch = (data) => {
		this.setState({
			contractors: data
		});
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};

	loadContractors = () => {
		API.getContractors()
			.then((res) => {
				console.log('contractor ', res.data);
				this.setState({
					contractors: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	loadAppointments = () => {
		API.getAppts()
			.then((res) => {
				console.log(res.data);
				this.setState({
					appointments: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	removeClient = (id) => {
		//remove the card and not deleting from database
	};

	deleteClient = (id) => {
		//deleting client from API
	};

	handleChange = (name) => (event) => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleTabChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		console.log('State: ', this.state);
		const { contractors, clients, appointments, value } = this.state;
		const { classes, theme } = this.props;
		return (
			<div>
				<Navbar />

				<br />
				<div className={classes.root}>
					<AppBar position='static' color='default'>
						<Tabs
							value={value}
							onChange={this.handleTabChange}
							indicatorColor='primary'
							textColor='primary'
							variant='fullWidth'>
							<Tab label='Contractors' />
							<Tab label='Clients' />
							<Tab label='Appointments' />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={value}
						onChangeIndex={this.handleChangeIndex}>
						<TabContainer dir={theme.direction}>
							<ContractorSearch onSearchChange={this.changeContractorSearch}>
								Contractor Search{' '}
							</ContractorSearch>
							{contractors.map((contractor) => (
								<ContractCard
									// conStreetNumber={contractor.location.streetNumber}
									conStreetAddress={contractor.address}
									conFirstName={contractor.firstName}
									conLastName={contractor.lastName}
									conPhone={contractor.phone}
									conEmail={contractor.email}
									// conStand
									conCert={contractor.certification}
									conPrice={contractor.pricing}
									conNotes={contractor.notes}
									conLocationName={contractor.locationName}
									conCity={contractor.city}
									conState={contractor.state}
									conZipCode={contractor.postalCode}
									key={contractors._id}
								/>
							))}
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ClientSearch onSearchChange={this.changeClientSearch}>Client Search</ClientSearch>
							{clients.map((client) => (
								<ClientCard
									companyName={client.name}
									clientPhone={client.phone}
									clientEmail={client.email}
									position={client.position}
									clientFirstName={client.firstName}
									clientLastName={client.lastName}
									billContact={client.billing.name}
									clientStreetName={client.billing.address}
									billPhone={client.billing.phone}
									billEmail={client.billing.email}
									clientCity={client.billing.city}
									clientZipCode={client.billing.zipCode}
									clientState={client.billing.state}
									clientType={client.typeClient}
									idToUpdate={client._id}
									key={client._id}
								/>
							))}
						</TabContainer>
						<TabContainer dir={theme.direction}>
							<ApptSearch onSearchChange={this.changeApptSearch}>ApptSearch</ApptSearch>
							{appointments.map((appointment) => (
								<AppointmentCard
									assigneeFirstName={appointment.assigneeFirstName}
									assigneeLastName={appointment.assigneeLastName}
									adjusterFirstName={appointment.adjusterFirstName}
									adjusterLastName={appointment.adjusterLastName}
									refName={appointment.refName}
									refNumber={appointment.refNumber}
									locationName={appointment.locationName}
									address={appointment.address}
									city={appointment.city}
									state={appointment.state}
									postalCode={appointment.postalCode}
									key={appointment._id}
								/>
							))}
						</TabContainer>
					</SwipeableViews>
				</div>
			</div>
		);
	}
}

Address.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Address);
