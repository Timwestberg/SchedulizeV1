import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Fab
} from "@material-ui/core";
import Type from "./form/Type";
import DateTime from "./form/Date&TimePicker";
import Date from "./form/DatePicker";
import PhoneNumber from "./form/PhoneNumber";
import EmployeeAssisting from "./form/Employee";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import API from "../../utils/API";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DateTimePicker
} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = {
  card: {
    minWidth: 300,
    minHeight: 200
    // justifyContent: "center",
  },
  cardHeader: {
    background: `#dfafea`,
    color: white
  },
  cardContent: {
    width: "100%"
  },
  input: {
    minWidth: "100%"
  },
  hCenter: {
    display: "flex"
    // alignItems: "center"
    // justifyContent: "center"
  },
  fab: {
    display: "flex"
    // justifyContent:
  }
};

class NewAppointmentCard extends React.Component {
  state = {
    dateInput: "",
    apptDate: "",
    assigneeFirstName: "",
    assigneeLastName: "",
    // assigneePhone: "",
    adjusterFirstName: "",
    adjusterLastName: "",
    // adjusterPhone: "",
    // assignementType: "",
    // multiline: "",
    refName: "",
    refNumber: "",
    locationName: "",
    address: "",
    city: "",
    state: "",
    postalCode: ""
    // employeeAssign: ""
  };

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleDateChange = date => {
    this.setState({ dateInput: date });
  };

  handleApptDate = date => {
    this.setState({ apptDate: date });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveAppt({
      dateInput: this.state.dateInput,
      apptDate: this.state.apptDate,
      assigneeFirstName: this.state.assigneeFirstName,
      assigneeLastName: this.state.assigneeLastName,
      // assigneePhone: this.state.assigneePhone,
      adjusterFirstName: this.state.adjusterFirstName,
      adjusterLastName: this.state.adjusterLastName,
      // adjusterPhone: this.state.adjusterPhone,
      // assignementType: this.state.assignementType,
      // notes: this.state.multiline,
      refName: this.state.refName,
      refNumber: this.state.refNumber,
      locationName: this.state.locationName,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      postalCode: this.state.postalCode
      // employeeAssign: this.state.employeeAssign
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                New Appointment
              </Typography>
            </Toolbar>
          </AppBar>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container item xs={12}>
            <form
              className={classes.input}
              autoComplete="off"
              onSubmit={this.handleFormSubmit}
            >
              <Grid container spacing={16}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  {/* Date the appointment was called in to be assigned */}
                  <Grid item xs={12}>
                    {/* <Date
                      fullWidth
                      dateChange={this.handleDateChange}
                      dateInput={this.state.dates.dateInput}
                    /> */}

                    <DatePicker
                      label="Date Assigned"
                      // helperText="Select Date"
                      showTodayButton
                      variant="outlined"
                      name="dateInput"
                      value={this.state.dateInput}
                      onChange={this.handleDateChange}
                    />
                  </Grid>
                  {/* Date the assignment will be taking place on */}

                  <Grid item xs={12}>
                    {/* <DateTime
                      dateChange={this.handleDateChange}
                      dateInput={this.state.dates.apptDate}
                    /> */}
                    <DateTimePicker
                      label="Date of Appointment"
                      keyboard
                      showTodayButton
                      variant="outlined"
                      name="apptDate"
                      value={this.state.apptDate}
                      onChange={this.handleApptDate}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>

                {/* Who will is assigning the assignment */}
                {/* Assignee Last Name for searchability purposes */}
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    id="assigneeFirstName"
                    label="Assignee&#39;s First Name"
                    className={classes.textField}
                    name="assigneeFirstName"
                    value={this.state.assigneeFirstName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    id="assigneeLastName"
                    fullWidth
                    label="Assignee&#39;s Last Name"
                    name="assigneeLastName"
                    className={classes.textField}
                    value={this.state.assigneeLastName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                {/* <Grid item xs={12}>
                    <PhoneNumber phone={this.state.assigneePhone} />
                  </Grid> */}
                {/* Assignee's phone number to contact in case their our questions[???] */}
                <br />

                {/* Contact information for person paying for the assignment {typically an adjuster} */}

                {/* Reference Name for the file || Name need in order to bill out the assignment */}
                {/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    id="adjusterFirstName"
                    label="Adjuster&#39;s First Name"
                    className={classes.textField}
                    name="adjusterFirstName"
                    value={this.state.adjusterFirstName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    id="adjusterLastName"
                    label="Adjuster&#39;s Last Name"
                    className={classes.textField}
                    name="adjusterLastName"
                    value={this.state.adjusterLastName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                {/* <Grid item xs={12}>
                    <PhoneNumber />
                  </Grid> */}

                <br />

                {/* Drop down selector with types off appointments to choose from */}
                {/* <Grid item xs={12}>
                    <Type />
                  </Grid> */}
                <br />

                {/* Notes section in case the client has special requests that need to be followed */}

                {/* <Grid item xs={8}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Notes"
                      multiline
                      fullWidth
                      rowsMax="2"
                      name="multiline"
                      value={this.state.multiline}
                      onChange={this.handleChange("multiline")}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                      onChange={this.handleInputChange}
                    />
                  </Grid> */}

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="Refname"
                    label="Reference Name"
                    className={classes.textField}
                    name="refName"
                    value={this.state.refName}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="Refname"
                    label="Reference Number"
                    className={classes.textField}
                    name="refNumber"
                    value={this.state.refNumber}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                  />
                </Grid>

                {/* Assignment location information */}

                {/* Assignment location information */}
                <Grid item xs={12}>
                  <TextField
                    id="outlined-helperText"
                    label="Location Name"
                    fullWidth
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                    name="locationName"
                    value={this.state.locationName}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    label="Street Address"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                    name="address"
                    value={this.state.adress}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    label="City"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                    name="city"
                    value={this.state.city}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    label="State/Province"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                    name="state"
                    value={this.state.state}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    label="Postal / Zip Code"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={this.handleInputChange}
                    name="postalCode"
                    value={this.state.postalCode}
                  />
                </Grid>

                {/* Which contractor will be covering the assignment */}
                {/* Date the contractor accepted the job || to avoid future problems */}

                {/* Name of the employee who assisted in taking the assignment */}
                <Grid item xs={12}>
                  {/* <EmployeeAssisting /> */}
                </Grid>

                {/* Add Button to save the assignment to the database */}
                <Grid item xs={6}>
                  <Fab
                    color="danger"
                    aria-label="Add"
                    className={classes.fab}
                    type="submit"
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(NewAppointmentCard);
