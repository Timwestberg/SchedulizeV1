import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { green, white } from "@material-ui/core/colors";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  Input,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Grid,
  Fab,
  Icon
} from "@material-ui/core";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {},
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
    age: "",
    open: false,
    checked: ""
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
      <div className={classes.hCenter}>
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
                  <FormControl className={classes.input}>
                    <InputLabel htmlFor="demo-controlled-open-select">
                      Standing
                    </InputLabel>
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
                    className={classes.textField}
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
      </div>
    );
  }
}

export default withStyles(styles)(ContractorCard);
