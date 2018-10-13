import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import DropDownContent from './drop-down-content';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return { user: state.entities.users[state.session.currentUserId] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DropDownContent);
