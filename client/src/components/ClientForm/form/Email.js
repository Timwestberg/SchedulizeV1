import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
} from "@material-ui/core";


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

class addressBlock extends React.Component {


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

      <Grid container item xs={12}>
            <form className={classes.input} autoComplete="off">
            <Grid container spacing={16}>



            <Grid item xs={4}>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>



                </Grid>
            </form>
          </Grid>
    )
  }
}

export default withStyles(styles)(addressBlock);
