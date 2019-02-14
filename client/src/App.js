import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Calendar from "./pages/Calendar";
import MapPage2 from "./pages/MapPage2";
// import MapPage from './pages/MapPage';
import Address from "./pages/Address";
import NoMatch from "./pages/NoMatch";
import Cards from "./pages/Cards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Schedulize from "./pages/Schedulize";
import Navbar from "./components/Navbar";

//First Way

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route
//             exact
//             path='/'
//             component={Login}
//             // render={() => <Redirect to='/login' />}
//           />
//           <Route exact path='/addUser' component={Register} />
//           <Route component={DefaultContainer} />

//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const DefaultContainer = () => (
//   <div>
//     <Navbar />
//     <Route exact path='/calendar' component={Calendar} />
//     <Route exact path='/map' component={MapPage2} />
//     <Route exact path='/forms' component={Cards} />
//     <Route exact path='/addressbook' component={Address} />
//   </div>
// );

// export default App;

// Second Way
function App() {
	return (
	  <Router>
		<div>
		  <Switch>
			<Route
			  exact
			  path='/'
			  component={Login}
			//   render={() => <Redirect to='/login' />}
			/>
			<Route exact path='/addUser' component={Register} />
			<Route exact path='/schedulize' component={Schedulize} />
  
			<Route component={NoMatch} />
		  </Switch>
		</div>
	  </Router>
	);
  }
  export default App;
  