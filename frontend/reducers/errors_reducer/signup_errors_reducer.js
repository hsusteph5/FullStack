import { RECEIVE_SIGNUP_ERRORS, RECEIVE_CURRENT_USER, RESET_ERRORS} from '../../actions/session_actions';

const signupErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return []
    case RESET_ERRORS:
      return []
    default:
      return oldState;
  }
}

export default signupErrorsReducer;
