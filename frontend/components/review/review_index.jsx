import React from 'react';
import icon from '../../../app/assets/images/user-icon.png';
import { createRatingStars } from '../../util/parsing_manager.jsx';

//from the business show page, you get passed the
//users: {50: {}, 43: {}, 21: {}}
const ReviewIndex = ({users, reviews, currentUserId}) => {
  // debugger;

  //need to pass down the session
  let editButton;
  let review = reviews.reverse().map(review => {
    if (users[review.author_id] === undefined) return '';


    //if the the current user owns the review, edit button will appear

    //comment this in when you fix the edit form
    editButton = (currentUserId === review.author_id) ? (
      <button>
        Edit this review
      </button>
    ): ("")



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

        <ul>


        </ul>

      </div>
    </div>
  )
}

export default ReviewIndex;
