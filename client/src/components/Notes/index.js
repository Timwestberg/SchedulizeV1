import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import './style.css'

function Notes() {
  return (
    <React.Fragment>
      <Grid container spacing={12}>
      <Typography variant="h6" gutterBottom>
      </Typography>
        <Grid item xs={5} sm={6}>
          <TextField
            id="notes"
            name="notes"
            placeholder="Notes"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Notes;
