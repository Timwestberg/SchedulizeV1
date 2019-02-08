import React, { Component } from 'react';
import API from '../../utils/API';
// import axios from 'axios';
// import FloatingActionButtons from "./FloatButtons";
// import Grid from '@material-ui/core/Grid';


class ApptSearch extends Component {
  state = {
    query: '',
    results: {
      appts: []
    }
  }


  getInfo = () => {
    // API.getAppts().then(appts => console.log("appts:"+appts.data));
    API.searchAppts(this.state.query).then(appts => { console.log("appts:ms"+ appts.data)
  this.props.onSearchChange(appts.data)}); 
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
      </form>

    )
  }
}

export default ApptSearch

