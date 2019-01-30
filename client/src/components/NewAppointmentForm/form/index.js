import React, { Component } from "react";
import Type from "./Type";
import DateTime from "./Date&TimePicker";
import Date from "./DatePicker";
// import PhoneNumber from "./PhoneNumber";
import AddressBlock from "./AddressBlock";
import EmployeeAssisting from "./Employee";
import ContractorCovering from "./ContractorCovering";
import Notes from "../../Notes";
import ReferenceInfo from "./ReferenceInfo";
import AssigneeInfo from "./AssigneeInfo";
import AdjusterInfo from "./AdjusterInfo";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Fab } from "@material-ui/core";
import { white } from "@material-ui/core/colors";


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

class Form extends Component {
  state = {};
  render(props) {
    const { classes } = this.props;
    return (
      <form
        className={classes.input}
        autoComplete="off"
        onSubmit={this.props.submit}
      >
        <Grid container spacing={16}>
          {/* Date the appointment was called in to be assigned */}
          <Grid item xs={12}>
            <Date />
          </Grid>
          {/* Date the assignment will be taking place on */}

          <Grid item xs={12}>
            <DateTime />
          </Grid>

          {/* Who will is assigning the assignment */}
          {/* Assignee Last Name for searchability purposes */}
          <Grid item xs={12} md={6} lg={6}>
            <AssigneeInfo />
          </Grid>
          {/* Assignee's phone number to contact in case their our questions[???] */}
          <br />

          {/* Contact information for person paying for the assignment {typically an adjuster} */}
          <Grid item xs={12} md={6} lg={6}>
            <AdjusterInfo />
          </Grid>
          <br />

          {/* Reference Name for the file || Name need in order to bill out the assignment */}
          {/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}
          <Grid item xs={12} md={6} lg={6}>
            <ReferenceInfo />
          </Grid>

          <br />

          {/* Drop down selector with types off appointments to choose from */}
          <Grid item xs={12}>
            <Type />
          </Grid>
          <br />

          {/* Notes section in case the client has special requests that need to be followed */}
          <Grid item xs={6}>
            <Notes />
          </Grid>

          {/* Assignment location information */}
          <Grid item xs={12}>
            <AddressBlock />
          </Grid>

          {/* Which contractor will be covering the assignment */}
          {/* Date the contractor accepted the job || to avoid future problems */}
          <Grid item xs={6}>
            <ContractorCovering />
          </Grid>

          {/* Name of the employee who assisted in taking the assignment */}
          <Grid item xs={6}>
            <EmployeeAssisting />
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
    );
  }
}

export default withStyles(styles)(Form);
