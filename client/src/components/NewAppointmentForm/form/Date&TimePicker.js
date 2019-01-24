import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';

export default class DateTime extends PureComponent {
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
        <DateTimePicker
                    label="Date of Appointment"
                    keyboard
                    showTodayButton
                    variant="outlined"
                     value={selectedDate} 
                     onChange={this.handleDateChange} 
                    />
      </MuiPickersUtilsProvider>
    );
  }
}
