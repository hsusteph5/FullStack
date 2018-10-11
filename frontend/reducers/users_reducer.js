import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';


const usersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, {[action.user.id]: action.user });
    default:
      return oldState;
  }
}

export default usersReducer;