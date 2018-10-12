import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route exact path='/' component={Splash} />
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute exact path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
