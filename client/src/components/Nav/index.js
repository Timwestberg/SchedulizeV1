import React from 'react';
import './nav.css';
// need these to import color scheme
// import white from '@material-ui/core/colors';
// import { createMuiTheme, withTheme } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			light: '#B0C4DE', //light blue
// 			main: '#4caf50', //green
// 			dark: '#336699' //dark blue
// 		},
// 		secondary: {
// 			light: '#dfafea', //light-purple
// 			main: '#9A0307', //bright-red
// 			dark: '#8D858C', //Grey
// 			contrastText: '#110d03' //black
// 		}
// 	}
// });

function Nav() {
	return (
		<div>
			<AppBar className='AppBar'>
				{/*color={theme.palette.primary.main}*/}
				<Toolbar>
					<Typography id='title' variant='h2' color='default'>
						Schedulizetest
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Nav;
