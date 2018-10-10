import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import { login, signup } from './util/session_api_util';
import { loginUser, signupUser, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  window.loginUser = loginUser;
  window.signupUser = signupUser;
  window.logout = logout;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  //

  ReactDOM.render(<Root store={store} />, root);
});
