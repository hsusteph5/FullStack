import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_BUSINESS } from '../../actions/business_actions';
import merge from 'lodash/merge';

//recieve business will fetch all the authored reviews from the views

const usersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.user.id]: action.user });
    case RECEIVE_BUSINESS:
      return merge({}, action.payload.users)
    default:
      return oldState;
  }
}

export default usersReducer;
