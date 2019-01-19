import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Input,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid
} from "@material-ui/core";

const styles = {
  card: {
    // minWidth: 300,
    // minHeight: 200
    // justifyContent: "center",
  },
  cardHeader: {
    background: "#4caf50",
    color: "white"
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
  }
};

class ContractorCard extends React.Component {
  state = {
    age: "",
    open: false
  };

  handleChange = event => {
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
                <Grid item>
                  <Input
                    id="contractorFirstName"
                    placeholder="First Name"
                    className={classes.input}
                  />
                </Grid>
                <Grid item>
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
                <Button />
              </form>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ContractorCard);
