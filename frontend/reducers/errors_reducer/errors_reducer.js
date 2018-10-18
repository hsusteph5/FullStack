import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import logoutErrorsReducer from './logout_errors_reducer';
import signupErrorsReducer from './signup_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  signup: signupErrorsReducer,
  logout: logoutErrorsReducer,
  review: reviewErrorsReducer
});


export default errorsReducer;
