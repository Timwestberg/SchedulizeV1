import React, { Component } from "react";
import Navbar from "../Navbar";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ClientName from "./form/ClientName";
import Addressblock from "./form/AddressBlock";
import Email from './form/Email';
import PhoneNumber from './form/PhoneNumber';
import Header from './form/formheader';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const countries = [
  {
    value: 'USA',
  },
  {
    value: 'UK',
  },
  {
    value: 'JAP',
  },
];

const clientType = [
  {
    value: 'Investigation',
  },
  {
    value: 'Workers Compensation',
  },
  {
    value: 'Insurance',
  },
  {
    value: 'Custom',
  },
];

class ClientCard extends React.Component {

  state = {
    clientType: "",
    country: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
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
                <Typography variant="h6" color="inherit" className={classes.grow}>
                  Client Card
                </Typography>
                <Button color="inherit">Edit</Button>
              </Toolbar>
            </AppBar>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid container spacing={16}>
                <Grid item xs={12}>

              <ClientName />

                </Grid>

                <Grid item xs={4}>

      <ClientName />

                </Grid>
                <Grid item xs={9} align="center">
                  <TextField
                    id="outlined-read-only-input"
                    defaultValue="Billing Information"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
   
                    <Addressblock />
                </Grid>
                <Grid item xs={2}>
                    <Email />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-full-width"
                    label="Position"
                    placeholder="Position"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
               
                <Grid item xs={4}>
                  <TextField
                    select
                    id="outlined-with-placeholder"
                    label="Type of Client"
                    className={classes.textField}
                    fullWidth
                    value={this.state.clientType}
                    onChange={this.handleChange('clientType')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
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
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Notes"
                    multiline
                    fullWidth
                    rowsMax="2"
                    value={this.state.multiline}
                    onChange={this.handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
            
              
              </Grid>
            </form>
          </CardContent>
        </Card>
        </Grid>
      </div>
    )
  }
};


ClientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientCard);