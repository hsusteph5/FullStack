import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
// import { login, signup } from './util/session_api_util';
// import { loginUser, signupUser, logout } from './actions/session_actions';
import { fetchBusiness } from './actions/business_actions';
import { createReview, updateReview } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  // telling your currentuser that you are still logged in (talk to backend)
  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  //testing
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  //
  // window.loginUser = loginUser;
  // window.signupUser = signupUser;
  // window.logout = logout;
  window.updateReview = updateReview;
  window.fetchBusiness = fetchBusiness;
  window.createReview = createReview;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //

  ReactDOM.render(<Root store={store} />, root);
});
