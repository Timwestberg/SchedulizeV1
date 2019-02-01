import React, { Component } from 'react';
import GoogleMapReact from 'google-maps-react';
import API from "../../../utils/API";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.71,
      lng: -117.16
    },
    zoom: 11
  };
  state = {
    contractors: []
};

componentDidMount() {
  this.loadContractors();
};

loadContractors = () => {
  API.getContractors()
    .then(res => {
      console.log("contractor ", res.data)
      this.setState({ 
          contractors: res.data, 
      })
  })
      .catch(err => console.log(err));
};
 
  render() {
    console.log("State: ", this.state)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBut6uSL-YAgTuek3nzJ4dcesUg8g42rnk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={32.715736}
            lng={	-117.161087}
            // text={'San Diego'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
    