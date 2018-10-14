import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';
import BusinessesContainer from './businesses/businesses_container';

import Splash from './splash/splash';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/businesses' component={BusinessesContainer} />
      <Route exact path="/"component={Splash} />
      <Redirect push to="/" />
    </Switch>

  </div>
);

    // <Redirect from="/*" to="/" />
export default App;
