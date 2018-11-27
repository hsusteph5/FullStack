import React from 'react';
import icon from '../../../app/assets/images/user-icon.png';
import { createRatingStars } from '../../util/helper_functions/parsing_manager.jsx';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

//from the business show page, you get passed the
//users: {50: {}, 43: {}, 21: {}}
const ReviewIndex = ({users, reviews, currentUserId, businessName}) => {

  //need to pass down the session
  let editButton;
  let review = reviews.reverse().map(review => {
    //render an empty string when you fetchBusinesses and it tries to render the reviews (information is lost)
    //will error out if nothing is rendered
    if (users[review.author_id] === undefined) {
      return '';
    }

    //if the the current user owns the review, edit button will appear
    //comment this in when you fix the edit form
    editButton = (currentUserId === review.author_id) ? (
      <Link to={{pathname: `/businesses/${review.id}/editareview`, state: {business: businessName, description: review.description}
      }}>
        Edit this review
      </Link>
    ): ("");

    return (
      <div className="business-review-container" key={review.id}>
        <div className="business-user-side-panel">
          <img src={icon}></img>
          <ul>
            <li className="review-user-name">{users[review.author_id].fname} {users[review.author_id].lname.slice(0,1)}.</li>
            <li className="review-city">San Francisco, CA</li>
            <li> { editButton }</li>
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
      </div>
    </div>
  )
}

export default withRouter(ReviewIndex);
