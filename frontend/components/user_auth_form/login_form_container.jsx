import React from 'react';
import { connect } from 'react-redux';
import { loginUser, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'login'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    resetErrors: () => dispatch(resetErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
