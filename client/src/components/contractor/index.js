import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Fab,
  Icon
} from "@material-ui/core";
import Standing from "./form/Standing";
import W9CheckBox from "./form/W9CheckBox";

const styles = {
  card: {
    minWidth: 300,
    minHeight: 200
    // justifyContent: "center",
  },
  cardHeader: {
    background: `#4caf50`,
    color: white
  },
  cardContent: {
    width: "100%"
  },
  form: {
    minWidth: "100%"
  },
  TextField: {
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

class ContractorCard extends React.Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
      <Card className={classes.card}>
        <CardHeader title="Contractor" className={classes.cardHeader} />
        <CardContent>
          <form className={classes.form} autoComplete="off">
            <Grid container>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorFirstName"
                  placeholder="First Name"
                  className={classes.TextField}
                  fullWidth
                  label="First Name"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorLastName"
                  placeholder="Last Name"
                  className={classes.TextField}
                  fullWidth
                  label="LastName"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPhone"
                  placeholder="Phone Number"
                  type="tel"
                  className={classes.TextField}
                  fullWidth
                  label="Phone #"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorEmail"
                  placeholder="Email"
                  className={classes.TextField}
                  fullWidth
                  label="Email"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Standing />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPricing"
                  placeholder="Pricing"
                  className={classes.TextField}
                  fullWidth
                  label="Pricing"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorNotes"
                  label="Notes"
                  multiline
                  rowsMax="4 md={12} lg={12}"
                  value={this.state.multiline}
                  className={classes.TextField}
                  fullWidth
                  value=""
                  margin="normal"
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorLocation"
                  placeholder="Location"
                  className={classes.TextField}
                  fullWidth
                  label="Location"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorAdress"
                  placeholder="Adress 2"
                  className={classes.TextField}
                  fullWidth
                  label="Adress 2"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorCity"
                  placeholder="City"
                  className={classes.TextField}
                  fullWidth
                  label="City"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorState"
                  placeholder="State/Province"
                  className={classes.TextField}
                  fullWidth
                  label="State/Province"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <TextField
                  id="contractorPostalCode"
                  placeholder="Postal Code"
                  className={classes.TextField}
                  fullWidth
                  label="Postal Code"
                  value=""
                />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <W9CheckBox />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContractorCard);
