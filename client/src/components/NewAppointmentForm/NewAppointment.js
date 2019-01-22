import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Input,
  TextField,
  Grid,
  Fab,
  Icon
} from "@material-ui/core";
import Type from "./form/Type";
import DateTime from "./form/Date&TimePicker";
import Date from "./form/DatePicker";

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
    checked: "",
    name: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="New Appointment" className={classes.cardHeader} />
        <CardContent>
          <Grid container>
            <form className={classes.input} autoComplete="off">

            {/* Date the appointment was called in to be assigned */}
            <Grid item lg={12}>

                <Date />

              </Grid>

              {/* Date the assignment will be taking place on */}


               <Grid item lg={12}>

                <DateTime />

              </Grid>

            {/* Who will is assigning the assignment */}
              <Grid item lg={12}>
                <Input
                  id="assigneeFirstName"
                  placeholder="First Name"
                  className={classes.input}
                />
              </Grid>

              {/* Assignee Last Name for searchability purposes */}
              <Grid item lg={12}>
                <Input
                  id="assigneeLastName"
                  placeholder="Last Name"
                  className={classes.input}
                />
              </Grid>

              {/* Assignee's phone number to contact in case their our questions[???] */}
              <Grid item>
                <Input
                  id="assigneePhone"
                  placeholder="Phone Number"
                  type="tel"
                  className={classes.input}
                />
              </Grid>
              <br />

              {/* Contact information for person paying for the assignment {typically an adjuster} */}
              <Grid item lg={12}>
                <Input
                  id="adjusterFirstName"
                  placeholder="First Name"
                  className={classes.input}
                />
              </Grid>

              <Grid item lg={12}>
                <Input
                  id="adjusterLastName"
                  placeholder="Last Name"
                  className={classes.input}
                />
              </Grid>

              <Grid item>
                <Input
                  id="adjusterPhone"
                  placeholder="Phone Number"
                  type="tel"
                  className={classes.input}
                />
              </Grid>
              <br />

              {/* Reference Name for the file || Name need in order to bill out the assignment */}
              <Grid item lg={12}>
                <Input
                  id="caseFirstName"
                  placeholder="First Name"
                  className={classes.input}
                />
              </Grid>

              <Grid item lg={12}>
                <Input
                  id="caseLastName"
                  placeholder="Last Name"
                  className={classes.input}
                />
              </Grid>
              <br />


              {/* Drop down selector with types off appointments to choose from */}
              <Grid item lg={12}>
              
              <Type />
              
              </Grid>

              <br />

              {/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}
              <Grid item lg={12}>
                <Input
                  id="RefNumber"
                  placeholder="Reference Number"
                  className={classes.input}
                />
              </Grid>

              {/* If there is a date of loss on the assignment  [OCI] */}
              {/* <Grid item lg={12}>
                <Input
                  id="DateOfLoss"
                  placeholder="Date of Loss"
                  className={classes.input}
                />
              </Grid> */}


              {/*If there is a Language on the assignment [OCI]  */}

{/* 
              <Grid item lg={12}>
                <Input
                  id="Language"
                  placeholder="Reference Number"
                  className={classes.input}
                />
              </Grid> */}
              <br />

              {/* Notes section in case the client has special requests that need to be followed */}
              <Grid>
                <TextField
                  id="standard-multiline-flexible"
                  label="Notes"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.input}
                  margin="normal"
                />
              </Grid>


            {/* Assignment location information */}
              <Grid item>
                <Input
                  id="appointmentLocation"
                  placeholder="Location Name"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="appointmentAddress"
                  placeholder="Adress 2"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="appointmentCity"
                  placeholder="City"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="appointmentState"
                  placeholder="State/Province"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="appointmentPostalCode"
                  placeholder="Postal Code"
                  className={classes.input}
                />
              </Grid>

              {/* Which contractor will be covering the assignment */}
              <Grid item>
                <Input
                  id="contractorCovering"
                  placeholder="Contractor Covering Assignment"
                  className={classes.input}
                />
              </Grid>

              {/* Date the contractor accepted the job || to avoid future problems */}
              <Grid item>
                <Input
                  id="dateAccepted"
                  placeholder="Date Accepted"
                  className={classes.input}
                />
              </Grid>

              {/* Name of the employee who assisted in taking the assignment */}
              <Grid item>
                <Input
                  id="employeeName"
                  placeholder="Employee taking the assignment"
                  className={classes.input}
                />
              </Grid>


              {/* Add Button to save the assignment to the database */}
              <Grid item>
                <Fab color="danger" aria-label="Add" className={classes.fab}>
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

export default withStyles(styles)(NewAppointmentCard);
