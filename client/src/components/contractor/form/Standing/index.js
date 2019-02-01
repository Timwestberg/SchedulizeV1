import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const styles = {
  input: {
    minWidth: "100%"
  }
};

class Standing extends React.Component {
  state = {
    age: "",
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
      <FormControl className={classes.input} fullWidth>
        <InputLabel htmlFor="demo-controlled-open-select">Standing</InputLabel>
        <Select
          open={this.state.open}
          onClose={this.handleClose}
          onOpen={this.handleOpen}
          value={this.state.age}
          onChange={this.handleChange}
          inputProps={{
            name: "age",
            id: "demo-controlled-open-select"
          }}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Good-Preferred </MenuItem>
          <MenuItem value={2}>Good</MenuItem>
          <MenuItem value={3}>Bad</MenuItem>
          <MenuItem value={4}>Issues</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Standing);
