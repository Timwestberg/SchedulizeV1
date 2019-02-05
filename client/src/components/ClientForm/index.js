import React, { Component } from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ClientName from "./form/ClientName";
import PhoneNumber from "./form/PhoneNumber";
import API from "../../utils/API";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  grow: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const countries = [
  {
    value: "USA"
  },
  {
    value: "UK"
  },
  {
    value: "JAP"
  }
];

const clientType = [
  {
    value: "Investigation"
  },
  {
    value: "Workers Compensation"
  },
  {
    value: "Insurance"
  },
  {
    value: "Custom"
  }
];

class ClientCard extends React.Component {
  state = {
    client: {
      firstName: "",
      lastName: "",
      phone: ""
    },
    company: "",
    billing: {
      
    }
    // clientType: "",
    // country: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    setTimeout(() => {
      console.log(this.state);
    }, 500);
  };

  handleClientChange = event => {
    const field = event.target.name;

    const client = this.state.client;

    client[field] = event.target.value;

    this.setState({
      client
    });
    console.log(this.state);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // const { client } = this.state;
    console.log(this.state);
    API.saveClient({
      client: {
        firstName: this.state.client.firstName,
        lastName: this.state.client.lastName,
        phone: this.state.client.phone
      },
      companyName: this.state.company
    }).then(res => {
      console.log(res.data);
    });

    console.log(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <AppBar position="static">
                <Toolbar>
                  <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.grow}
                  >
                    Client Card
                  </Typography>
                  <Button color="inherit">Edit</Button>
                </Toolbar>
              </AppBar>
              <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={this.handleFormSubmit}
              >
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <ClientName
                      client={this.state.client}
                      change={this.handleClientChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-full-width"
                      name="company"
                      value={this.state.company}
                      onChange={this.handleInputChange}
                      label="Company/Client Name"
                      placeholder="Company/Client Name"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      id="outlined-read-only-input"
                      name=""
                      defaultValue="Billing Information"
                      className={classes.textField}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={2}>
                    <PhoneNumber />
                  </Grid>

                  {/* <Grid item xs={2}>
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
                  </Grid> */}
                  {/* <Grid item xs={4}>
                    <TextField
                      id="outlined-full-width"
                      label="Position"
                      placeholder="Position"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <TextField
                      id="outlined-helperText"
                      label="Location Name"
                      defaultValue="Location Name"
                      // fullWidth
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <TextField
                      id="outlined-helperText"
                      label="Street Address"
                      defaultValue="Street Address"
                      // fullWidth
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid> */}
                  {/* <Grid item xs={4}>
                    <TextField
                      select
                      id="outlined-with-placeholder"
                      label="Type of Client"
                      className={classes.textField}
                      fullWidth
                      value={this.state.clientType}
                      onChange={this.handleInputChange("clientType")}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      helperText="Choose one"
                      margin="normal"
                      variant="outlined"
                    >
                      {clientType.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid> */}
                  {/* <Grid item xs={4}>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Notes"
                      multiline
                      fullWidth
                      rowsMax="2"
                      value={this.state.multiline}
                      onChange={this.handleInputChange("multiline")}
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <TextField
                      id="outlined-helperText"
                      label="City"
                      defaultValue="City"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <TextField
                      id="outlined-helperText"
                      label="State/Province"
                      defaultValue="State/Province"
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid> */}
                  {/* <Grid item xs>
                    <Grid
                      container
                      direction="row-reverse"
                      justify="flex-start"
                      alignItems="baseline"
                    >
                      <TextField
                        id="outlined-helperText"
                        label="Postal / Zip Code"
                        defaultValue="Zip Code"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid> */}
                  {/* <Grid item xs={2}>
                    <Grid
                      container
                      direction="row-reverse"
                      justify="flex-start"
                      alignItems="baseline"
                    >
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Country"
                        className={classes.textField}
                        value={this.state.country}
                        onChange={this.handleInputChange("country")}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu
                          }
                        }}
                        helperText="Please select your country"
                        margin="normal"
                        variant="outlined"
                      >
                        {countries.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid> */}
                  <Grid item xs={6}>
                    <Fab
                      color="danger"
                      aria-label="Add"
                      className={classes.fab}
                      type="submit"
                    >
                      <AddIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

ClientCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClientCard);
