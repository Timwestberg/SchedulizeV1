import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';
const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	dense: {
		marginTop: 16
	},
	menu: {
		width: 200
	}
});

class AddressSearch extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete='off'>
				<Grid xs={6}>
					<TextField
						id='outlined-full-width'
						label='Address Book'
						style={{ margin: 8 }}
						placeholder='Search....'
						helperText='Use to search Address Book'
						fullWidth
						margin='normal'
						variant='outlined'
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
			</form>
		);
	}
}

AddressSearch.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressSearch);
