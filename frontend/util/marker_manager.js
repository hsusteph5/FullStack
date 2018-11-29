//accepts the map
export default class MarkerManager {
    constructor(map) {
      this.map = map;
      this.markers = {};
    }

    updateMarkers(businesses) {
        // console.log('time to update');
        // console.log(businesses)
        for(let i = 0; i < businesses.length; i++){
            this.markers[businesses[i].id] = [businesses[i].lat, businesses[i].lng]
            this.createMarkersFromBusinesses(businesses[i]);
        }
    }

    createMarkersFromBusinesses(business){
        let marker = new google.maps.Marker({
            position: {lat: business.lat, lng: business.lng},
            draggable: true,
            title:`${business.name}`
        });
        marker.setMap(this.map);
    }
}



