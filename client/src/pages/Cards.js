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
import ContractorCard from "../components/contractor/"
  class Cards extends Component {
    render() {
      return ( 
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className = "App" >
        <Navbar/>
        <Appointmentform />

 // ContractorCard -  this is firing an error - ./src/pages/Cards.js
// Module not found: Can't resolve '../components/contractor/contractorCard' 
// in 
// 'C:\Users\mpmks\Desktop\3\Schedulize\client\src\pages' 
// UPDATED to file directory - '..components/contractor' -ms 1/22/2019
        <ContractorCard />
  
        <NewAppoointmentForm />
  
        <ClientForm />
  
        </div>

        </MuiPickersUtilsProvider>
      );
    }
  }
  
  export default Cards;