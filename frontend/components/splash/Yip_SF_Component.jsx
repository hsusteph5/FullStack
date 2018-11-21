import React from 'react';
import { createRatingStars } from '../../util/helper_functions/parsing_manager';

const YipSFComponent = ( { businesses } ) => {
    let businessHTML = (businesses.length !== 0) ? (
        businesses.map((business) => {
            let stars = createRatingStars(business.avg_rating);
            return (
                <div className="splash-business-index" key={business.id}>
                    <img src={business.photoUrls[0]} style={{width: 225, height: 225, objectFit: 'cover'}}></img>
                    <div className="splash-business-description">
                        <h4><a href>{business.name}</a></h4>
                        <h5>{ stars }</h5>
                        <h5 id="splash-business-reviews">{business.num_reviews} reviews</h5>
                        <h5>San Francisco</h5>
                        <h5><i class="fas fa-fire"></i> Opened 5 weeks ago </h5>
                    </div>
                </div>
            )
        })
    ): ("");
    return(
        <div className="yip-sf-container">
            <h3> Hot & New Businesses </h3>
            <div className="splash-business-container">
                { businessHTML }
            </div>
        </div>

    );
    
}

export default YipSFComponent;