import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DropDownContent from '../nav-bar/drop-down-content';
// import SignupFormContainer from '../session_form/signup_form_container';
import { logout } from '../../actions/session_actions';

function Modal({modal, closeModal}) {
  debugger;
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <DropDownContent />;
      break;
    // case 'signup':
    //   component = <SignupFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUserId = state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Modal);
