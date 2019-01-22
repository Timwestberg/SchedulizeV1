import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const styles = {
  input: {
    minWidth: "100%"
  }
};

class Type extends React.Component {
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
    const { classes } = this.props;
    return (
      <FormControl className={classes.input}>
        <InputLabel htmlFor="demo-controlled-open-select">Type of Assignment</InputLabel>
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
        >
          <MenuItem value="">
            <em>Select Type</em>
          </MenuItem>
          <MenuItem value={1}>Medical </MenuItem>
          <MenuItem value={2}>Legal</MenuItem>
          <MenuItem value={3}>Statement</MenuItem>
          <MenuItem value={4}>Meeting</MenuItem>
          <MenuItem value={5}>Deposition</MenuItem>
          <MenuItem value={6}>Custom</MenuItem>

        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Type);
