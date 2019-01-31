import React from "react";
import API from "../../utils/API";
import { withStyles } from "@material-ui/core/styles";
// import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Fab
} from "@material-ui/core";
import Form from "./form";

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
    // apptInfo: {
    //   dateInput: "",
    //   apptDate: "",
    //   assignee: {
    //     firstName: "",
    //     lastName: "",
    //     phone: ""
    //   },
    //   adjuster: {
    //     firstName: "",
    //     lastName: "",
    //     phone: ""
    //   },
    //   refName: {
    //     firstName: "",
    //     lastName: ""
    //   },
    //   refType: "",
    //   language: "",
    //   notes: "",
    //   location: {
    //     name: "",
    //     adress: "",
    //     city: "",
    //     state: "",
    //     zip: ""
    //   },
    //   contractor: {
    //     firstName: "",
    //     lastName: "",
    //     phone: ""
    //   },
    //   dateAccepted: "",
    //   employeeAssign: ""
    // }
  };

  // handleChange = event => {
  //   const field = event.target.name;

  //   const apptInfo = this.state.apptInfo;

  //   apptInfo[field] = event.target.value;

  //   this.setState({
  //     apptInfo
  //   });
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.saveAppt(this.state.apptInfo);
  //   alert(`Form submitted`);
  //   console.log(this.state);
  // };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="New Appointment" className={classes.cardHeader} />
        <CardContent>
          <Grid container item xs={12}>
            <Form
              // apptInfo={this.state.apptInfo}
              // change={this.handleChange}
              // submit={this.handleFormSubmit}
            />
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(NewAppointmentCard);
