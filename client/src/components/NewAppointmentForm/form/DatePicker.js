import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

export default class App extends PureComponent {
  state = {
    selectedDate: new Date(),
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
                    label="Date Assigned"
                    // helperText="Select Date"
                    showTodayButton
                    variant="outlined"
                     value={selectedDate} 
                     onChange={this.handleDateChange} 
                    />
      </MuiPickersUtilsProvider>
    );
  }
}