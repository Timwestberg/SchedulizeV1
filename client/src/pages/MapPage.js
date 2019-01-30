import React from 'react';
import MapPage from "../components/Map";
import Navbar from "../components/Navbar";
import TestMap from "../components/Map/TestMap"

function Googlemappy() {
  return (
      <div>
          <Navbar/>
         {/* <MapPage /> */}
         <TestMap />
      </div>
  )
}

export default Googlemappy;
