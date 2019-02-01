import React, { Component } from "react";
// import Navbar from "../Navbar";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
// import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { white } from "@material-ui/core/colors";
// import FormattedInputs from "../NewAppointmentForm/form/PhoneNumber";

const styles = theme => ({
    cardHeader: {
        background: `#4caf50`,
        color: white
    },
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
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <AppBar position="static" className={classes.cardHeader}>
                            <Toolbar>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    Client Contact Card
                                </Typography>
                                <Button color="inherit">Edit</Button>
                            </Toolbar>
                        </AppBar>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Grid container
                                spacing={24}
                                direction="row"
                                justify="center"
                                alignItems="flex-start"
                            >
                                <Grid item xs={4}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-end"
                                        alignItems="flex-start"
                                    >
                                        <TextField
                                            id="outlined-name"
                                            label="First Name"
                                            className={classes.textField}
                                            value={this.props.clientFirstName}
                                            margin="normal"
                                            variant="outlined"
                                        // fullWidth
                                        />
                                        <Grid item xs>
                                            <TextField
                                                id="outlined-name"
                                                label="Last Name"
                                                className={classes.textField}
                                                value={this.props.clientLastName}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        id="outlined-number"
                                        label="Phone Number"
                                        value={this.props.clientPhone}
                                        type="Phone Number"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <TextField
                                        id="outlined-email-input"
                                        label="Email"
                                        className={classes.textField}
                                        fullWidth
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.props.clientEmail}
                                    />
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
                                        id="outlined-full-width"
                                        label="Company / Client Name"
                                        placeholder="Company / Client Name"
                                        value={this.props.companyName}
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="outlined-full-width"
                                        label="Position"
                                        placeholder="Position"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        value={this.props.position}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Notes"
                                        multiline
                                        fullWidth
                                        rows="10"
                                        defaultValue="Default Value"
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={3}>
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
                                    <TextField
                                        id="outlined-helperText"
                                        label="Contact Name"
                                        Value={this.props.billContact}
                                        fullWidth
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-number"
                                        label="Billing Phone Number"
                                        value={this.props.billPhone}
                                        type="Phone Number"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="outlined-email-input"
                                        label="Billing Email"
                                        className={classes.textField}
                                        fullWidth
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        margin="normal"
                                        variant="outlined"
                                        value={this.props.billEmail}
                                    />

                                    <TextField
                                        id="outlined-helperText"
                                        label="Street Address"
                                        defaultValue="Street Address"
                                        fullWidth
                                        className={classes.textField}
                                        margin="normal"
                                        variant="outlined"
                                        value={this.props.clientStreetNumber + " " + this.props.clientStreetName}
                                    />
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-end"
                                        alignItems="flex-start"
                                    >
                                        <TextField
                                            id="outlined-helperText"
                                            label="City"
                                            defaultValue="City"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            value={this.props.clientCity}
                                        />
                                        <Grid item xs>
                                            <TextField
                                                id="outlined-helperText"
                                                label="State/Province"
                                                defaultValue="State"
                                                className={classes.textField}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth
                                                value={this.props.clientState}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-end"
                                        alignItems="flex-start"
                                    >
                                        <TextField
                                            id="outlined-helperText"
                                            label="Postal / Zip Code"
                                            defaultValue="Zip Code"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            value={this.props.clientZipCode}
                                        />
                                        <Grid item xs>
                                            {/* <TextField
                                          id="outlined-select-currency"
                                          select
                                          label="Country"
                                          className={classes.textField}
                                          value={this.state.country}
                                          onChange={this.handleChange('country')}
                                          fullWidth
                                          SelectProps={{
                                              MenuProps: {
                                                  className: classes.menu,
                                              },
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
                                      </TextField> */}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
};


ClientCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientCard);