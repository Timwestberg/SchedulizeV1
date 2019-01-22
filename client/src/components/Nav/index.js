// import React from "react";
// import "./style.css";

// function Nav() {

//   return (
//     <nav className="navbar navbar-light bg-success">
//       <h3 href="/">Schedulize</h3>
//          </nav>
//   );
// }

// export default Nav;

import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './nav.css'
// need these to import color scheme
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const bar = green[500]; // #4caf50  


// eslint-disable-next-line no-unused-vars
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9A0307',
      contrastText: '#F9F9F9 ',
    },
    secondary: {
      main: '#4caf50',
      contrastText: '#F9F9F9 ',
    },
  },
});


function Nav () {
  return (
    <div>
      <AppBar className ="AppBar" color = {bar}>
        <Toolbar>
          <Typography>
            Schedulize
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
