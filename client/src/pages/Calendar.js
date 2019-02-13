import React, { Component } from 'react';
import DailyView from '../components/DailyView';
import Navbar from '../components/Navbar';

class Calendar extends Component {
	state = {};
	render() {
		return (
			<div>
				{/* <Navbar /> */}
				<DailyView />
			</div>
		);
	}
}

export default Calendar;
