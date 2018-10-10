import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome to Yip</h1>, root);
});
