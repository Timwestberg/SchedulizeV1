import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { white } from '@material-ui/core/colors';
import {
	Button,
	Card,
	CardHeader,
	CardContent,
	TextField,
	Grid,
	Fab,
	Icon,
	FormControl,
	MenuItem,
	Select,
	InputLabel
} from '@material-ui/core';
import Standing from './form/Standing';
import W9CheckBox from './form/W9CheckBox';
import API from '../../utils/API';

const styles = {
	card: {
		minWidth: 300,
		minHeight: 200
		// justifyContent: "center",
	},
	cardHeader: {
		background: `#4caf50`,
		color: white
	},
	cardContent: {
		width: '100%'
	},
	form: {
		minWidth: '100%'
	},
	TextField: {
		minWidth: '100%'
	},
	hCenter: {
		display: 'flex'
		// alignItems: "center"
		// justifyContent: "center"
	},
	fab: {
		display: 'flex'
		// justifyContent:
	}
};

const certification = [
  {
    value: "Certified"
  },
  {
    value: "Qualified "
  }
];

class ContractorCard extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    certification: "",
    // standing: "",
    pricing: "",
    notes: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    // standingComp: {
    //   age: "",
    //   open: false
    // }
  };

	handleChange = (event) => {
		const field = event.target.name;

		const standingComp = this.state.standingComp;

		standingComp[field] = event.target.value;

		this.setState({
			standingComp
		});
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

  handleCertChange = name => event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };

	handleOpen = () => {
		this.setState({ open: true });
	};

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveContractor({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      certification: this.state.certification,
      // standing: this.state.standing,
      pricing: this.state.pricing,
      notes: this.state.notes,
      locationName: this.state.locationName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      postalCode: this.state.postalCode
    });
    console.log(this.state);

		this.setState({
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			certification: '',
			standing: '',
			pricing: '',
			notes: '',
			location: ''
		});
	};

  render() {
    const { classes } = this.props;
    // const { standingComp } = this.state;
    return (
      <Card className={classes.card}>
        <CardHeader title="Contractor" className={classes.cardHeader} />
        <CardContent>
          <Grid container>
            <form
              className={classes.form}
              autoComplete="off"
              onSubmit={this.handleFormSubmit}
            >
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorFirstName"
                  placeholder="First Name"
                  className={classes.TextField}
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorLastName"
                  placeholder="Last Name"
                  className={classes.TextField}
                  fullWidth
                  label="LastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPhone"
                  placeholder="Phone #"
                  type="tel"
                  className={classes.TextField}
                  fullWidth
                  label="Phone #"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorEmail"
                  placeholder="Email"
                  className={classes.TextField}
                  fullWidth
                  label="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                {/* <Standing
                  name="standing"
                  value={this.state.Standing}
                  onChange={this.handleInputChange}
                /> */}
							{/* <FormControl className={classes.input} fullWidth>
                  <InputLabel htmlFor="demo-controlled-open-select">
                    Standing
                  </InputLabel>
                  <Select
                    open={this.state.standingComp.open}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    value={this.state.standingComp.age}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "age",
                      id: "demo-controlled-open-select"
                    }}
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Good-Preferred </MenuItem>
                    <MenuItem value={2}>Good</MenuItem>
                    <MenuItem value={3}>Bad</MenuItem>
                    <MenuItem value={4}>Issues</MenuItem>
                  </Select>
                </FormControl> */}
                <TextField
                  select
                  id="outlined-with-placeholder"
                  label="Type of Client"
                  className={classes.textField}
                  fullWidth
                  value={this.state.certification}
                  name="certification"
                  onChange={this.handleCertChange("certification")}
                  SelectProps={{
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Choose one"
                  margin="normal"
                  variant="outlined"
                >
                  {certification.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPricing"
                  placeholder="Pricing"
                  className={classes.TextField}
                  fullWidth
                  label="Pricing"
                  name="pricing"
                  value={this.state.pricing}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorNotes"
                  label="Notes"
                  multiline
                  rowsMax="4 md={12} lg={12}"
                  value={this.state.multiline}
                  className={classes.TextField}
                  fullWidth
                  name="notes"
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  margin="normal"
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorLocation"
                  placeholder="Location"
                  className={classes.TextField}
                  fullWidth
                  label="Location"
                  name="locationName"
                  value={this.state.locationName}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorAddress"
                  placeholder="Address"
                  className={classes.TextField}
                  fullWidth
                  label="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorCity"
                  placeholder="City"
                  className={classes.TextField}
                  fullWidth
                  label="City"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorState"
                  placeholder="State/Province"
                  className={classes.TextField}
                  fullWidth
                  label="State/Province"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPostalCode"
                  placeholder="Postal Code"
                  className={classes.TextField}
                  fullWidth
                  label="Postal Code"
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <W9CheckBox />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Fab
                  color="primary"
                  aria-label="Add"
                  className={classes.fab}
                  type="submit"
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContractorCard);
