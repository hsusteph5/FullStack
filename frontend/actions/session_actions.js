import * as  APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGOUT_ERRORS = 'RECEIVE_LOGOUT_ERRORS';
export const RESET_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER, user: currentUser
});

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS, errors: errors
});


export const receiveSignupErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS, errors: errors
});

export const receiveLogoutErrors = (errors) => ({
  type: RECEIVE_LOGOUT_ERRORS, errors: errors
});

export const resetErrors = (errors) => ({
  type: RESET_ERRORS, errors: errors
})

export const loginUser = (user) => {
  return dispatch => {
    return APIUtil.login(user)
      .then(
        user => dispatch(receiveUser(user)),
        error => dispatch(receiveSessionErrors(error.responseJSON))
      )
  }
}

export const signupUser = (user) => {
  return dispatch => {
    return APIUtil.signup(user)
      .then(
        user => dispatch(receiveUser(user)),
        error => dispatch(receiveSignupErrors(error.responseJSON))
      )
  }
}

export const logout = () => {
  return dispatch => {
    return APIUtil.logout()
      .then(() => dispatch(logoutUser()),
      error => dispatch(receiveLogoutErrors(error.responseJSON))
      )
  }
}
