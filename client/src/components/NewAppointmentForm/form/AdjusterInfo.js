import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
} from "@material-ui/core";
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
    const { classes } = this.props;
    return (

        <div>
                <TextField
                    id="adjusterFirstName"
                    label="Adjuster's First Name"
                    className={classes.textField}
                    value={this.props.name}
                    margin="normal"
                    variant="outlined"
                  />

                <TextField
                    id="adjusterLastName"
                    label="Adjuster's Last Name"
                    className={classes.textField}
                    value={this.props.name}
                    margin="normal"
                    variant="outlined"
                  />

                  <PhoneNumber />
</div>
    )
  }
}

export default withStyles(styles)(ContractorCovering);
