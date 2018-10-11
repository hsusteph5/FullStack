import React from 'react';
import { connect } from 'react-redux';
import showErrors from './show_errors';

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(mapStateToProps, null)(showErrors)
