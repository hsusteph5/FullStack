import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessMap extends React.Component {
    componentDidMount() {
        // // set the map to show SF
        // const mapOptions = {
        //   center: { lat: 37.7758, lng: -122.435 }, // this is SF
        //   zoom: 13
        // };
    
        // // wrap this.mapNode in a Google Map
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.businesses);
    }

    componentDidUpdate(prevProps){
      const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 12
      };
      if(prevProps.businesses !== this.props.businesses){
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses);
      }
    }
    
      render() {
        return (
          <div id='map-container' ref={ map => this.mapNode = map }></div>
        )
      }
}


export default BusinessMap;
