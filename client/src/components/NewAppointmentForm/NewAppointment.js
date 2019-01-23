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
  Fab,
} from "@material-ui/core";
import Type from "./form/Type";
import DateTime from "./form/Date&TimePicker";
import Date from "./form/DatePicker";
import PhoneNumber from "./form/PhoneNumber";
import AddressBlock from "./form/AddressBlock";
import EmployeeAssisting from "./form/Employee";
import ContractorCovering from "./form/ContractorCovering";
import Notes from '../Notes/index';
import ReferenceInfo from "./form/ReferenceInfo";
import AssigneeInfo from "./form/AssigneeInfo"
import AdjusterInfo from "./form/AdjusterInfo";

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

                {/* <Date /> */}

              </Grid>

              {/* Date the assignment will be taking place on */}


               <Grid item lg={12}>
{/* 
                <DateTime /> */}

              </Grid>

            {/* Who will is assigning the assignment */}


              {/* Assignee Last Name for searchability purposes */}
              <Grid item lg={12}>

                <AssigneeInfo />
              </Grid>
              {/* Assignee's phone number to contact in case their our questions[???] */}
              <br />

              {/* Contact information for person paying for the assignment {typically an adjuster} */}
              <Grid item sm={6}>

                <AdjusterInfo />

              </Grid>
              <br />

              {/* Reference Name for the file || Name need in order to bill out the assignment */}
              {/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}
              <Grid item lg={12}>

              <ReferenceInfo />

              </Grid>

              <br />


              {/* Drop down selector with types off appointments to choose from */}
              <Grid item lg={12}>
              
              <Type />
              
              </Grid>
              <br />


              {/* Notes section in case the client has special requests that need to be followed */}
              <Grid item lg={12}>

              <Notes />

              </Grid>

              {/* Assignment location information */}
              <AddressBlock />

              {/* Which contractor will be covering the assignment */}
              {/* Date the contractor accepted the job || to avoid future problems */}
              <Grid item lg={12}>

              <ContractorCovering />

              </Grid>

              {/* Name of the employee who assisted in taking the assignment */}
              <Grid item lg={12}>

              <EmployeeAssisting />

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
