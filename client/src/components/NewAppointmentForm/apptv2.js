import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { white } from "@material-ui/core/colors";
import { Grid, Fab, Card, CardHeader, CardContent } from "@material-ui/core";
import API from "../../utils/API";
import Input from "../UI/Input";

const styles = {
  cardHeader: {
    background: `#4caf50`,
    color: white
  },
  cardContent: {
    width: "100%"
  },
  input: {
    minWidth: "100%"
  },
  hCenter: {
    display: "flex"
  },
  fab: {
    display: "flex"
  }
};

class NewAppointmentForm extends React.Component {
  state = {
    apptForm: {
      dateInput: {
        elementType: "DatePicker",
        elementConfig: {
          label: "Date Assigned",
          fullWidth: true,
          showTodayBotton: true,
          variant: "outlined"
        },
        value: new Date()
      },
      apptDate: {
        elementType: "DateTimePicker",
        elementConfig: {
          label: "Appointment Date",
          fullWidth: true,
          variant: "outlined"
        },
        value: ""
      },
      assigneeFirstName: {
        elementType: "TextField",
        elementConfig: {
          label: "Assignee First Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      assigneeLastName: {
        elementType: "TextField",
        elementConfig: {
          label: "Assignee Last Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      adjusterFirstName: {
        elementType: "TextField",
        elementConfig: {
          label: "Adjuster First Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      adjusterLastName: {
        elementType: "TextField",
        elementConfig: {
          label: "Adjuster Last Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      refName: {
        elementType: "TextField",
        elementConfig: {
          label: "Reference Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      refNumber: {
        elementType: "TextField",
        elementConfig: {
          label: "Reference Number",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        name: "refNumber",
        value: ""
      },
      locationName: {
        elementType: "TextField",
        elementConfig: {
          label: "Location Name",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      address: {
        elementType: "TextField",
        elementConfig: {
          label: "Address",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      city: {
        elementType: "TextField",
        elementConfig: {
          label: "City",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      state: {
        elementType: "TextField",
        elementConfig: {
          label: "State",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      },
      postalCode: {
        elementType: "TextField",
        elementConfig: {
          label: "Postal / Zip Code",
          fullWidth: true,
          margin: "normal",
          variant: "outlined"
        },
        value: ""
      }
    }
  };

  handleInputChange = (event, inputId) => {
    const updatedApptForm = { ...this.state.apptForm };
    const updatedFormElement = { ...updatedApptForm[inputId] };
    updatedFormElement.value = event.target.value;
    updatedApptForm[inputId] = updatedFormElement;
    this.setState({ apptForm: updatedApptForm });
  };

  handleDateChange = date => {
    this.setState({
      apptForm: {
        ...this.state.apptForm,
        apptDate: {
          elementType: "DateTimePicker",
          elementConfig: {
            label: "Appointment Date",
            fullWidth: true,
            variant: "outlined"
          },
          value: date
        }
      }
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { apptForm } = this.state;

    const formData = {};
    for (let field in apptForm) {
      formData[field] = apptForm[field].value;
    }

    API.saveAppt(formData).then(res => {
      setTimeout(() => {
        alert(`Appointment #${res.data._id} has been Saved`);
      }, 100);
      const formData = {};
      for (let field in apptForm) {
        apptForm[field].value = "";
        formData[field] = apptForm[field].value;
      }
      this.setState({ apptForm: { ...apptForm, formData } });
    });
  };


  render() {
    const { classes } = this.props;
    const { apptForm } = this.state;
    const formElementsArray = [];
    for (let key in apptForm) {
      formElementsArray.push({
        id: key,
        config: apptForm[key]
      });
    }

    let form = (
      <form onSubmit={this.handleFormSubmit}>
        <Grid container>
          {formElementsArray.map(formElement => (
            <Grid item xs={6}>
              <Input
                key={formElement.id}
                value={formElement.config.value}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                change={event => this.handleInputChange(event, formElement.id)}
                dateChange={this.handleDateChange}
              />
            </Grid>
          ))}
          <Grid item xs={6}>
            <Fab aria-label='Add' className={classes.fab} type='submit'>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </form>
    );
    return (
      <Card>
        <CardHeader
          title='New Appointment Form'
          className={classes.cardHeader}
        />
        {form}
        <CardContent />
      </Card>
    );
  }
}

export default withStyles(styles)(NewAppointmentForm);
