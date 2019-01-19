import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, white } from "@material-ui/core/colors";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const styles = {
  input: {
    minWidth: "100%"
  },
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class Standing extends React.Component {
  state = {
    age: "",
    open: false
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.input}>
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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(Standing);
