import React from 'react';
import { connect } from 'react-redux';
import { signupUser, resetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    formType: 'signup'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signupUser(user)),
    resetErrors: () => dispatch(resetErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
