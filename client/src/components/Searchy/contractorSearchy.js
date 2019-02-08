import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios';
// import FloatingActionButtons from "./FloatButtons";
import Grid from '@material-ui/core/Grid';


class ContractorSearch extends Component {
  state = {
    query: '',
    results: {
      contractors: []
    }
  }

  // pass search terms into get functions
// bunch 
//filter on server - 
// transmit as little info as possible 

getInfo = () => {
  API.searchContractors(this.state.query).then(contractors => { console.log("contractors:ms"+ contractors.data)
this.props.onSearchChange(contractors.data)}); 
}

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
          this.getInfo() 
    })
  }

  render() {
    return (

      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {/* <FloatingActionButtons /> */}
      </form>

    )
  }
}

export default ContractorSearch


