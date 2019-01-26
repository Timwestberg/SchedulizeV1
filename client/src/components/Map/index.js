// styles and imports
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleMap from './SimpleMap/mappy';


const styles = {
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
};


class MapPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
<SimpleMap></SimpleMap>
      </CardContent>
      </Card>
    );
  }
}

MapPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MapPage);



// show all contractors on map - 
// load into  point for staff - 
// choose radius - 10 miles
// staff - 


// load job up - different color- progress bar
// 1) address in full - 
// 2 ) use values not db - 


// quick question -> zipcode - or area 

//link and api key - 
// API key = AIzaSyBut6uSL-YAgTuek3nzJ4dcesUg8g42rnk
//   https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBut6uSL-YAgTuek3nzJ4dcesUg8g42rnk&center=32.592853291717795,-117.28467035109075&zoom=9&format=png&maptype=roadmap&style=feature:road.arterial%7Celement:geometry.fill%7Ccolor:0x8cce8f&style=feature:road.local%7Celement:geometry.fill%7Ccolor:0xdfafea&style=feature:water%7Celement:geometry.fill%7Ccolor:0x346699&size=480x360


