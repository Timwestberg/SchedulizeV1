import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class NameFields extends React.Component {
  state = {
    first: '',
    last: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      
        <TextField
          id="outlined-adornment-First"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="First"
          value={this.state.weight}
          onChange={this.handleChange('Name')}
          helperText="Name"
        />

                <TextField
          id="outlined-adornment-Last"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Last"
          value={this.state.weight}
          onChange={this.handleChange('Last')}
          helperText="Name"
        />

      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NameFields);
