import React, { Component } from 'react';
// import Navbar from '../Navbar';
import ClientCard from '../ClientCard';
import ContractCard from '../ContractCard';
import AppointmentCard from '../AppointmentCard';
import API from '../../utils/API';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ClientSearch from '../Searchy/clientSearchy';
import ApptSearch from '../Searchy/appointmentSearchy';
import ContractorSearch from '../Searchy/contractorSearchy';

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

class ContractMap extends Component {
	state = {
		value: 0,
		// clients: [],
		contractors: []
		// appointments: []
	};

	componentDidMount() {
		this.loadContractors();
		// this.loadClients();
		// this.loadAppointments();
	}

	// componentDidUpdate() {
	//   this.loadAppointments();
	// }

	// loadClients = () => {
	// 	API.getClients()
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			this.setState({
	// 				clients: res.data
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// };

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

	// loadAppointments = () => {
	// 	API.getAppts()
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			this.setState({
	// 				appointments: res.data
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// };

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
				{/* <Navbar /> */}
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
					</SwipeableViews>
				</div>
			</div>
		);
	}
}

ContractMap.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ContractMap);