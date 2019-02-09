import React from 'react';
import SignIn from '../components/LogInModal';
import PropTypes from 'prop-types';
import API from '../utils/API';
import Navbar from '../components/Nav/index';
import './style.css';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
		}
	}	});

class LoginPage extends React.Component {
	/**
   * Class constructor.
   */

	constructor(props) {
		super(props);

		// set the initial component state
		this.state = {
			user: {
				username: '',

				password: ''
			},
			redirect: `/addressbook`
		};

		this.processLogin = this.processForm.bind(this);

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

		// Login routes from Utility
		API.LoginUser({
			username: this.state.user.username,
			password: this.state.user.password
		}).then((res) => {
			if (res.data.status === 'Authorized') {
				window.location = this.state.redirect;
			}
		});
	}

	/**
   * Render the component.
   */
	render() {
		return (
			<main className={`box ${styles.main}`}>
				<Navbar />
				<br />
				<br />
				<SignIn onSubmit={this.processLogin} onChange={this.changeUser} user={this.state.user} />
			</main>
		);
	}
}

LoginPage.contextTypes = {
	router: PropTypes.object.isRequired
};

export default LoginPage;
