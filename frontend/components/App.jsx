import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Hello, this is Yip</h1>
      <NavBarContainer />
    </header>

    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
