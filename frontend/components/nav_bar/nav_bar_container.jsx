import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.userId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
