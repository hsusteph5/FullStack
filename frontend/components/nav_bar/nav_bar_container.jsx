import React from 'react';
import { connect } from 'react-redux';
import NavBarWithRouter from './nav_bar';
import { logout, loginUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.currentUserId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    loginUser: (user) => dispatch(loginUser(user)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBarWithRouter);
