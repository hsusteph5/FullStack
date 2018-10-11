import { RECEIVE_LOGOUT_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const logoutErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_LOGOUT_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return []
    case RESET_ERRORS:
      return []
    default:
      return oldState;
  }
}

export default logoutErrorsReducer;
