import React, {
    Component
  } from 'react';
  import Appointmentform from "../components/AppointmentForm"
  import ContractorCard from "../components/contractor"
  import ApptCard from "../components/ApptCard"
  import Navbar from "../components/Navbar"
  import NewAppoointmentForm from "../components/NewAppointmentForm/NewAppointment"
  // import './App.css';
  import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import ClientForm from "../components/ClientForm/index"
  class Cards extends Component {
    render() {
      return ( 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className = "App" >
        <Navbar/>
        <Appointmentform />
        
        <ContractorCard />
  
        <NewAppoointmentForm />
  
        <ClientForm />
  
        </div>

        </MuiPickersUtilsProvider>
      );
    }
  }
  
  export default Cards;