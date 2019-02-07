// import Nav from '../components/Nav';
import RegisterForm from '../components/RegisterMdal/index';
import PropTypes from 'prop-types';
import React from 'react';
import API from '../utils/API';

class SignUpPage extends React.Component {
	/**
   * Class constructor.
   */
	constructor(props) {
		super(props);

		// set the initial component state
		this.state = {
			user: {
				name: '',

				username: '',

				password: ''
			}
		};

		this.processForm = this.processForm.bind(this);

		this.changeUser = this.changeUser.bind(this);
	}

	/**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
	changeUser(event) {
		const field = event.target.name;

		const user = this.state.user;

		user[field] = event.target.value;

		this.setState({
			user
		});
		// console.log(this.state);
	}

	processForm(event) {
		// prevent default action. in this case, action is the form submission event
		event.preventDefault();

		console.log(this.state.user);
		API.SaveUser({
			username: this.state.user.username,
			name: this.state.user.name,
			password: this.state.user.password
		});
	}

	/**
   * Render the component.
   */
	render() {
		return <RegisterForm onSubmit={this.processForm} onChange={this.changeUser} user={this.state.user} />;
	}
}

SignUpPage.contextTypes = {
	router: PropTypes.object.isRequired
};

export default SignUpPage;
