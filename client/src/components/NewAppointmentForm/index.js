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

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveAppt();
    alert(`Form submitted`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader title="New Appointment" className={classes.cardHeader} />
        <CardContent>
          <Grid container item xs={12}>
            <Form submit={this.handleFormSubmit}/>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(NewAppointmentCard);
