import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route exact path='/' component={Splash} />
    <Route exact path='/login' component={LoginFormContainer} />
    <Route exact path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;


// <header>
//   <h1>Hello, this is Yip</h1>
//   <NavBarContainer />
// </header>
