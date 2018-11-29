import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
// import { login, signup } from './util/session_api_util';
// import { loginUser, signupUser, logout } from './actions/session_actions';
// import { fetchBusiness } from './actions/business_actions';
// import { createReview, updateReview } from './actions/review_actions';
import { getLocation } from './util/geolocation.js';

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

  window.getLocation = getLocation; 
  // window.updateReview = updateReview;
  // window.fetchBusiness = fetchBusiness;
  // window.createReview = createReview;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
// let arr = ["827 Sacramento St San Francisco, CA 94108",  "411 Valencia St San Francisco, CA 94103", "17 Kearny St San Francisco, CA 94108", "1746 Post St San Francisco, CA 94115",
// "1435 Irving St San Francisco, CA 94122", "736 Divisadero St San Francisco, CA 94117", "2824 Jones St San Francisco, CA 94133", "1544 15th St San Francisco, CA 94103",
// "1717 17th St San Francisco, CA 94107", "1840 Fillmore St San Francisco, CA 94115"]
// let obj = {}
// for(let i = 0; i < arr.length; i++){
//   getLocation(arr[i]).then(res => obj[arr[i]] = res.results[0].geometry.location)
// }
// console.log(obj)

  ReactDOM.render(<Root store={store} />, root);
});
