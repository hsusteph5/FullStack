import * as  APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER, user: currentUser
});

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS, errors: errors
});

export const loginUser = (user) => {
  return dispatch => {
    return APIUtil.login(user)
      .then(
        user => dispatch(receiveUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
      )
  }
}

export const signupUser = (user) => {
  return dispatch => {
    return APIUtil.signup(user)
      .then(user => dispatch(receiveUser(user)))
  }
}

export const logout = () => {
  return dispatch => {
    return APIUtil.logout()
      .then(() => dispatch(logoutUser()))
  }
}
