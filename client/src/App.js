import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import MapPage from "./pages/MapPage";
import Address from "./pages/Address";
import NoMatch from "./pages/NoMatch";
import Cards from "./pages/Cards";
import Login from "./pages/Login";
import NewAppointment from "./components/NewAppointmentForm";

function App() {
  return (
    // <Router>
    <div>
      {/* <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/forms" component={Cards} />
        <Route exact path="/addressbook" component={Address} />
        <Route component={NoMatch}/>
      </Switch> */}
      <NewAppointment />
    </div>
    // {/* </Router> */}
  );
}
export default App;
