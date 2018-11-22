import React from 'react';
import { createRatingStars } from '../../util/helper_functions/parsing_manager';
import { Link } from 'react-router-dom';

const YipSFComponent = ( { businesses } ) => {
    let businessHTML = (businesses.length !== 0) ? (
        businesses.map((business) => {
            let stars = createRatingStars(business.avg_rating);
            return (
                <div className="splash-business-index" key={business.id}>
                    <img src={business.photoUrls[0]} style={{width: 225, height: 225, objectFit: 'cover'}}></img>
                    <div className="splash-business-description">
                        <h4> <Link to={{pathname: `/businesses/${business.id}`}}> {business.name} </Link> </h4>
                        <h5>{ stars }</h5>
                        <h5 id="splash-business-reviews">{business.num_reviews} reviews</h5>
                        <h5>San Francisco</h5>
                        <h5><i className="fas fa-fire"></i> Opened 5 weeks ago </h5>
                    </div>
                </div>
            )
        })
    ): ("");
    return(
        <div className="yip-sf-container">
            <h2>Yip San Francisco</h2>
            <div className="yip-san-francisco">
                
                <ul>
                    <li>Los Angeles</li>
                    <li>New York</li>
                    <li>San Jose</li>
                    <li>Chicago</li>
                    <li>Palo Alto</li>
                </ul>
            </div>
            <h3> Hot & New Businesses </h3>
            <div className="splash-business-container">
                { businessHTML }
            </div>
        </div>

    );
    
}

export default YipSFComponent;