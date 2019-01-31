import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
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

class ContractorCovering extends React.Component {
  render() {
    const { classes, change, firstName, lastName } = this.props;
    return (
      <div>
        <TextField
          id="assigneeFirstName"
          label="Assignee's First Name"
          className={classes.textField}
          name="firstName"
          value={firstName}
          margin="normal"
          variant="outlined"
          onChange={change}
        />

        <TextField
          id="assigneeLastName"
          label="Assignee's Last Name"
          className={classes.textField}
          name="lastName"
          value={lastName}
          margin="normal"
          variant="outlined"
          onChange={change}
        />

        <PhoneNumber />
      </div>
    );
  }
}

export default withStyles(styles)(ContractorCovering);
