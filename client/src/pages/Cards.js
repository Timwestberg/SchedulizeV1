import React, { Component } from 'react';
import ContractorCard from '../components/contractor';
import Navbar from '../components/Navbar';
import NewAppoointmentForm from '../components/NewAppointmentForm/NewAppointment';
// import './App.css';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import ClientForm from '../components/ClientForm/index';
// import Forms from '../components/Forms';
class Cards extends Component {
	render() {
		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className='App'>
					<Navbar />
					{/* <Forms /> */}

					<ContractorCard />

					<NewAppoointmentForm />

					<ClientForm />
				</div>
			</MuiPickersUtilsProvider>
		);
	}
}

export default Cards;
