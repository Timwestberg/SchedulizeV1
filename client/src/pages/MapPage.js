import React from 'react';
// import MapPage from "../components/Map";
import Navbar from "../components/Navbar";
import TestMap from "../components/Map/TestMap"
import ContractCard from '../components/ContractCard';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function Googlemappy(props) {
    const { classes } = props;

    return (
        <div>
            <Grid container spacing={24}>
                <Grid item xs={24} sm={12}>
                    <Navbar>
                        Submit
                   </Navbar>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ContractCard className={classes.paper}>xs=6 sm=3</ContractCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TestMap className={classes.paper}>xs=6 sm=3</TestMap>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <ContractCard className={classes.paper}>xs=6 sm=3</ContractCard>
                </Grid>
            </Grid>
            {/* <MapPage /> */}
            {/* <TestMap /> */}
        </div>
    )
}

Googlemappy.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Googlemappy);
