import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Input,
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

class ContractorCard extends React.Component {
  state = {
    checked: "",
    name: ""
  };

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
      <Card className={classes.card}>
        <CardHeader title="Contractor" className={classes.cardHeader} />
        <CardContent>
          <Grid container>
            <form className={classes.input} autoComplete="off">
              <Grid item lg={12}>
                <Input
                  id="contractorFirstName"
                  placeholder="First Name"
                  className={classes.input}
                />
              </Grid>
              <Grid item lg={12}>
                <Input
                  id="contractorLastName"
                  placeholder="Last Name"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorPhone"
                  placeholder="Phone Number"
                  type="tel"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorEmail"
                  placeholder="Email"
                  className={classes.input}
                />
              </Grid>
              <br />
              <Grid>
                <Standing />
              </Grid>
              <Grid item>
                <Input
                  id="contractorPricing"
                  placeholder="Pricing"
                  className={classes.input}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-multiline-flexible"
                  label="Notes"
                  multiline
                  rowsMax="4"
                  value={this.state.multiline}
                  className={classes.input}
                  margin="normal"
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorLocation"
                  placeholder="Location Name"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorAdress"
                  placeholder="Adress 2"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorCity"
                  placeholder="City"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorState"
                  placeholder="State/Province"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <Input
                  id="contractorPostalCode"
                  placeholder="Postal Code"
                  className={classes.input}
                />
              </Grid>
              <Grid item>
                <W9CheckBox />
              </Grid>
              <Grid item>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                  <AddIcon />
                </Fab>
              </Grid>
            </form>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ContractorCard);
