import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DropDownContainer from '../nav_bar/drop-down-container';
import { logout } from '../../actions/session_actions';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'dropdown':
      component = <DropDownContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-container">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <DropDownContainer />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Modal);
