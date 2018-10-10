import * as  PostApiUtil from 'util/session_api_util';

const receiveUser = () => {
  
}


export const login(user) => {
  return dispatch => {
    return PostApiUtil.signup(user)
      .then(user => )
  }
}
