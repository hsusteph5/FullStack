import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';

const sessionReducer = (oldState = {currentUserId: null }, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({} , oldState, {currentUserId: action.user.id});
    case LOGOUT_CURRENT_USER:
      return { currentUserId: null }
    default:
      return oldState;
  }
}


export default sessionReducer;
