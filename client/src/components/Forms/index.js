import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  div,
  withMobileDialog
} from "@material-ui/core";
// import { div } from "@material-ui/core/styles";
import ClientForm from "../ClientForm/index";
import NewAppointmentForm from "../NewAppointmentForm/NewAppointment";
import ContractorCard from "../contractor";

class Forms extends React.Component {
  state = {
    forms: {
      open: false
    },
    contractor: {
      open: false
    },
    client: {
      open: false
    },
    appointment: {
      open: false
    }
  };

  handleClickOpen = () => {
    this.setState({ forms: { open: true } });
  };

  handleContractorOpen = () => {
    this.setState({ contractor: { open: true } });
  };

  handleClientOpen = () => {
    this.setState({ client: { open: true } });
  };

  handleAppointmentOpen = () => {
    this.setState({ appointment: { open: true } });
  };

  handleClose = () => {
    this.setState({
      forms: { open: false },
      contractor: { open: false },
      client: { open: false },
      appointment: { open: false }
    });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        {/* <Grid container justify="center" alignItems="center"> */}
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Open Forms
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.forms.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Would you like to add to the database?"}
          </DialogTitle>
          <DialogContent>
            {/* Contractor Form Btn */}
            <Grid container justify="center">
              <Grid item xs={7}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={this.handleContractorOpen}
                >
                  Contractor Form
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={this.state.contractor.open}
                  onClose={this.handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <ContractorCard />
                </Dialog>
              </Grid>
              {/* Client Form Btn */}
              <Grid item xs={7}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={this.handleClientOpen}
                >
                  Client Form
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={this.state.client.open}
                  onClose={this.handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <ClientForm />
                </Dialog>
              </Grid>
              {/* Appointment Form Btn */}
              <Grid item xs={7}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={this.handleAppointmentOpen}
                >
                  Appointment
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={this.state.appointment.open}
                  onClose={this.handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <NewAppointmentForm />
                </Dialog>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        {/* </Grid> */}
      </div>
    );
  }
}

Forms.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(Forms);
