import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';
import Splash from './splash/splash';

const App = () => (
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />

      <Route exact path="/"component={Splash} />
    </Switch>
);

    // <Redirect from="/*" to="/" />
export default App;
