import React from 'react';
import BusinessMap from '../business_map';
import BusinessesIndex from '../../businesses/businesses_index';

class MapIndex extends React.Component {
    render(){
        return(
            <div>
                <BusinessMap businesses={this.props.businesses}/>
                <BusinessesIndex 
                    fetchBusinesses={this.props.fetchBusinesses}
                    fetchBusiness={this.props.fetchBusiness}
                    businesses={this.props.businesses}
                    reviews={this.props.reviews}
                />
            </div>
        )
    }
}

export default MapIndex;