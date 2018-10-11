import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, loginUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    loginUser: (user) => dispatch(loginUser(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
