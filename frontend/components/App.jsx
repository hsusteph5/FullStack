import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './user_auth_form/login_form_container';
import SignupFormContainer from './user_auth_form/signup_form_container';
import BusinessesContainer from './businesses/businesses_container';
import BusinessShowContainer from './business_show/business_show_container';
import ReviewFormContainer from './review/review_form_container';
import EditFormContainer from './review/edit_form_container';
import SplashContainer from './splash/splash_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/businesses' component={BusinessesContainer} />
      <Route exact path ='/businesses/:businessId' component={BusinessShowContainer}/>
      <ProtectedRoute exact path ='/businesses/:businessId/writeareview' component={ReviewFormContainer}/>
      <ProtectedRoute exact path ='/reviews/:reviewId/editareview' component={EditFormContainer}/>
      <Route exact path="/"component={SplashContainer} />
      <Redirect push to="/" />
    </Switch>

  </div>
);

    // <Redirect from="/*" to="/" />
export default App;
