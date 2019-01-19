import React from "react";
import { BrowserRouter as Router, Route, Switch } from "reaact-router-dom";
import Login from "./pages/Login";
import Calendar from "./pages/Calendar";
import MapPage from "./pages/MapPage";
import Address from "./pages/Address";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/addressbook" component={Address} />
        <Route component={NoMatch}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;