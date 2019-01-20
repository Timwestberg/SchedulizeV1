import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel, Icon } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class W9CheckBox extends React.Component {
  state = {
    checkedG: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checkedG}
            onChange={this.handleChange("checkedG")}
            value="checkedG"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
        }
        label="W-9"
      />
    );
  }
}

export default withStyles(styles)(W9CheckBox);
