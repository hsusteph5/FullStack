import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BusinessShowMap extends React.Component {
    componentDidMount() {
        // // set the map to show SF
        const mapOptions = {
            center: { lat: this.props.business.lat, lng: this.props.business.lng },
            zoom: 20
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.createMarkersFromBusinesses(this.props.business);
        // console.log('mount', this.props.business)
    }

    componentDidUpdate(prevProps){
      const mapOptions = {
        center: { lat: this.props.business.lat, lng: this.props.business.lng }, 
        zoom: 20
      };
      if(prevProps.business !== this.props.business){
        // console.log('change in props')
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.createMarkersFromBusinesses(this.props.business);
      }
    }
    
      render() {
        return (
          <div id='map-show' ref={ map => this.mapNode = map }></div>
        )
      }
}


export default BusinessShowMap;
