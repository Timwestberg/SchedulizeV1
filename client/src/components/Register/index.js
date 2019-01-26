import React from "react";
import { Card, CardHeader, TextField, Grid } from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles"

const styles = {
    card: {
        maxWidth: "30%"
    },
    container: {
        padding: 20
    }
}

const Register = (props) => {
    const {classes} = props;

  return (
    <Card className={classes.card}>
      <form>
        <Grid container justify="center" className={classes.container}>
          <Grid item sm={12}>
            <CardHeader title="Register" align="center" />
            {/* <Typography variant="title" align="center">Register</Typography> */}
          </Grid>

          <Grid item sm={10}>
            <TextField id="userName" type="text" label="User Name:" fullWidth />
          </Grid>
          <Grid item sm={10}>
            <TextField
              id="password"
              type="password"
              label="Password:"
              fullWidth
            />
          </Grid>

          <Grid item sm={10}>
            <TextField
              id="confirmPassword"
              type="password"
              label="Confirm Password:"
              fullWidth
            />
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default withStyles(styles)(Register);
