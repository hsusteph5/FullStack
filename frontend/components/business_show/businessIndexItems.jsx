import React from 'react';
import googleMap from '../../../app/assets/images/google-map.png';
import { parsingCity, parsingStreet } from '../../util/helper_functions/parsing_manager.jsx';
import BusinessShowMap from './business_show_map';

export const BusinessAddress = ({address, phone, url, business}) => {
    return (
        <div>
            <BusinessShowMap business={business}/>
            <ul>
            <li></li>
            <li className="show-address"><i className="fas fa-map-marker-alt"></i>{parsingStreet(address)}</li>
            <li className="show-address"><span className="extra-padding-marker"></span>{parsingCity(address)}</li>
            <li className="show-phone"><i className="fas fa-phone"></i>{phone}</li>
            <li className="show-link"><i className="fas fa-external-link-alt"></i><a target="_blank" href={`http://${url}`}>{url}</a></li>
            </ul>
        </div>
        
    );
}

// export const businessInfo = ({name, avg_rating, price, categories}) => {
//     <div>
//     <ul className="business-show-list">
//       <li><h1>{this.props.business.name}</h1></li>
//       <li className="show-stars-alignment">{createRatingStars(this.props.business.avg_rating)}<span>{this.props.reviews.length} Reviews</span></li>
//       <li className="business-price">{parsingPrice(this.props.business.price)}</li>
//       {this.businessCategories(this.props.business.categories)}
//     </ul>
//   </div>
// }