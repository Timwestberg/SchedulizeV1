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
import API from "../../../utils/API";
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
  state = {
    apptInfo: {
      dateInput: "",
      apptDate: "",
      assignee: {
        firstName: "",
        lastName: "",
        phone: ""
      },
      adjuster: {
        firstName: "",
        lastName: "",
        phone: ""
      },
      refName: {
        firstName: "",
        lastName: ""
      },
      refType: "",
      language: "",
      notes: "",
      location: {
        name: "",
        adress: "",
        city: "",
        state: "",
        zip: ""
      },
      contractor: {
        firstName: "",
        lastName: "",
        phone: ""
      },
      dateAccepted: "",
      employeeAssign: ""
    }
  };

  handleInputChange = event => {
    const field = event.target.name;

    const apptInfo = this.state.apptInfo;
    
    apptInfo[field] = event.target.value;

    this.setState({
      apptInfo
    });
    // let value = event.target.value;
    // const name = event.target.name;
    // this.setState({
    //   [name]: value
    // });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveAppt(this.state.apptInfo);
    alert(`Form submitted`);
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { apptInfo } = this.state;
    return (
      <form
        className={classes.input}
        autoComplete="off"
        onSubmit={this.handleFormSubmit}
      >
        <Grid container spacing={16}>
          {/* Date the appointment was called in to be assigned */}
          <Grid item xs={12}>
            <Date change={this.handleInputChange} />
          </Grid>
          {/* Date the assignment will be taking place on */}

          <Grid item xs={12}>
            <DateTime
              value={apptInfo.apptDate}
              change={this.handleInputChange}
            />
          </Grid>

          {/* Who will is assigning the assignment */}
          {/* Assignee Last Name for searchability purposes */}
          <Grid item xs={12} md={6} lg={6}>
            <AssigneeInfo
              // name={apptInfo.assignee}
              firstName={apptInfo.assignee.firstName}
              lastName={apptInfo.assignee.lastName}
              change={this.handleInputChange}
            />
          </Grid>
          {/* Assignee's phone number to contact in case their our questions[???] */}
          <br />

          {/* Contact information for person paying for the assignment {typically an adjuster} */}
          <Grid item xs={12} md={6} lg={6}>
            <AdjusterInfo
              value={apptInfo.adjuster}
              change={this.handleInputChange}
            />
          </Grid>
          <br />

          {/* Reference Name for the file || Name need in order to bill out the assignment */}
          {/* Reference Number to be able to easily search for the assignemnt if one is not assign give default */}
          <Grid item xs={12} md={6} lg={6}>
            <ReferenceInfo
              value={apptInfo.refName}
              change={this.handleInputChange}
            />
          </Grid>

          <br />

          {/* Drop down selector with types off appointments to choose from */}
          <Grid item xs={12}>
            <Type value={apptInfo.refType} change={this.handleInputChange} />
          </Grid>
          <br />

          {/* Notes section in case the client has special requests that need to be followed */}
          <Grid item xs={6}>
            <Notes value={apptInfo.notes} change={this.handleInputChange} />
          </Grid>

          {/* Assignment location information */}
          <Grid item xs={12}>
            <AddressBlock
              value={apptInfo.location}
              change={this.handleInputChange}
            />
          </Grid>

          {/* Which contractor will be covering the assignment */}
          {/* Date the contractor accepted the job || to avoid future problems */}
          <Grid item xs={6}>
            <ContractorCovering
              value={apptInfo.contractor}
              change={this.handleInputChange}
            />
          </Grid>

          {/* Name of the employee who assisted in taking the assignment */}
          <Grid item xs={6}>
            <EmployeeAssisting
              value={apptInfo.employeeAssign}
              change={this.handleInputChange}
            />
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
