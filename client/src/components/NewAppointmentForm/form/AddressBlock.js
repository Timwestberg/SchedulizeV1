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



            {/* Assignment location information */}
            <Grid item xs={12}>
                  <TextField
                    id="outlined-helperText"
                    label="Location Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="outlined-helperText"
                    label="Street Address"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
               
               
                <Grid item xs={6}>
                  <TextField
                    id="outlined-helperText"
                    label="City"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-helperText"
                    label="State/Province"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>

                    <TextField
                      id="outlined-helperText"
                      label="Postal / Zip Code"
                      className={classes.textField}
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
