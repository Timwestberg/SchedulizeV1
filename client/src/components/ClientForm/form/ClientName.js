import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import PhoneNumber from "./PhoneNumber";

const styles = {
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

class ClientName extends React.Component {
  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  render() {
    const { classes, client, change, name } = this.props;
    return (
      <div>
          <TextField
            id="ClientFirstName"
            type="text"
            label="Client's First Name"
            className={classes.textField}
            name="firstName"
            value={client.firstName}
            onChange={change}
            margin="normal"
            variant="outlined"
            // fullWidth
          />
          <TextField
            id="ClientLastName"
            type="text"
            label="Client's Last Name"
            className={classes.textField}
            name="lastName"
            value={client.lastName}
            onChange={change}
            margin="normal"
            variant="outlined"
            // fullWidth
          />
          <TextField
            id="clientPhone"
            type="text"
            label="Client's Phone Number"
            className={classes.textField}
            name="phone"
            value={client.phone}
            onChange={change}
            margin="normal"
            variant="outlined"
            // fullWidth 
          />

        {/* <PhoneNumber /> */}
      </div>
    );
  }
}

export default withStyles(styles)(ClientName);
