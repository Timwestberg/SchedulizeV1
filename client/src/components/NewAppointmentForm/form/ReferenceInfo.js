import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

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

class ContractorCovering extends React.Component {
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
    const { classes, value } = this.props;
    return (
      <div>
        <TextField
          id="RefName"
          label="Reference Name"
          className={classes.textField}
          name="firstName"
          value={value.firstName}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="RefNumber"
          label="Reference Number"
          className={classes.textField}
          name="phone"
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(ContractorCovering);
