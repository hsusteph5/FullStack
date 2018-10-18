import React from 'react';
import icon from '../../../app/assets/images/user-icon.png';
import { createRatingStars } from '../../util/parsing_manager.jsx';

//from the business show page, you get passed the
//users: {50: {}, 43: {}, 21: {}}
const ReviewIndex = ({users, reviews}) => {
  // debugger;
  let review = reviews.map(review => {
    if (users[review.author_id] === undefined) return '';
    return (
      <div className="business-review-container" key={review.id}>
        <div className="business-user-side-panel">
          <img src={icon}></img>
          <ul>
            <li className="review-user-name">{users[review.author_id].fname} {users[review.author_id].lname.slice(0,1)}.</li>
            <li className="review-city">San Francisco, CA</li>
          </ul>

        </div>

        <div className="review-description-container">
          { createRatingStars(review.rating)}
          {review.description}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        { review }

        <ul>


        </ul>

      </div>
    </div>
  )
}

export default ReviewIndex;
