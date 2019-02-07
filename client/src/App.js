import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Calendar } from './pages/Calendar';
import MapPage2 from './pages/MapPage2';
// import MapPage from './pages/MapPage';
import Address from './pages/Address';
import NoMatch from './pages/NoMatch';
import Cards from './pages/Cards';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/addUser' component={Register} />
					<Route exact path='/calendar' component={Calendar} />
					<Route exact path='/map' component={MapPage2} />
					<Route exact path='/forms' component={Cards} />
					<Route exact path='/addressbook' component={Address} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
