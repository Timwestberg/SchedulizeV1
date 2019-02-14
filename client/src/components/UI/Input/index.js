import React from "react";
import { TextField } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  DateTimePicker
} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    // case "Input":
    //   inputElement = <Input {...props} />;
    //   break;
    case "TextField":
      inputElement = <TextField {...props.elementConfig} value={props.value} onChange={props.change}/>;
      break;
    case "DatePicker":
      inputElement = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker {...props.elementConfig} value={props.value} onChange={props.dateChange}/>
        </MuiPickersUtilsProvider>
      );
      break;
    case "DateTimePicker":
      inputElement = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker {...props.elementConfig} value={props.value} onChange={props.dateChange}/>
        </MuiPickersUtilsProvider>
      );
      break;
    default:
      inputElement = <TextField {...props.elementConfig} value={props.value} onChange={props.change}/>;
  }

  return <div>{inputElement}</div>;
};

export default Input;
