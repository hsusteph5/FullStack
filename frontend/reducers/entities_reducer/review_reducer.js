import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../../actions/business_actions';
import { RECEIVE_REVIEW } from '../../actions/review_actions';

import merge from 'lodash/merge';


const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return action.payload.reviews;
    case RECEIVE_BUSINESS:
      let newState = merge({}, action.payload.reviews);
      return newState;
    case RECEIVE_REVIEW:
      return merge({}, state, action.review);
    default:
      return state;
  }
}


export default reviewReducer;
