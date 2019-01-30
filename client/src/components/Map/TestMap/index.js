import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import API from "../../../utils/API";

const style = {
    width: "100",
    hieght: "100%"
}



export class TestMap extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
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

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        console.log("State: ", this.state)
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={style}
                initialCenter={{
                    lat: 32.71,
                    lng: -117.16
                }}
                onClick={this.onMapClicked}
            >
                {this.state.contractors.map(contractor => (
                    <Marker
                        onClick={this.onMarkerClick}
                        name={this.props.contractorName}
                        title={this.props.contractorLocation}
                        position={this.props.contractorCoords}
                    // { lat: 32.817031, lng: -117.180160 }
                    />
                ))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        <p>{this.state.selectedPlace.title}</p>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyBqnB1s-zvouH1_skf3WKRjE6uhq_5M3rI"
})(TestMap)