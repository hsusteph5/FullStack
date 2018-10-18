import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW, RESET_ERRORS } from '../../actions/review_actions';


const reviewErrorsReducer = (oldState = [], action) => {
  // debugger;
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors
    case RECEIVE_REVIEW:
      return []
    default:
      return oldState;
  }
}

export default reviewErrorsReducer;
