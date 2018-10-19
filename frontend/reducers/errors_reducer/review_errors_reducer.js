import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW, RESET_ERRORS } from '../../actions/review_actions';
import merge from 'lodash/merge';

const reviewErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return merge([], action.errors);
    case RECEIVE_REVIEW:
      return []
    default:
      return oldState;
  }
}

export default reviewErrorsReducer;
