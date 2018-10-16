import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DropDownContainer from '../nav_bar/drop-down-container';
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router";



class Modal extends React.Component {

  render() {
     let closeModal = this.props.closeModal;
     let modal = this.props.modal;

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

    let style = "";
    if(this.props.location.pathname.includes('businesses')){
      style = "30px";
    } else {
      style = "53px";
    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-container">
          <div className="modal-child" onClick={e => e.stopPropagation()} style={{top: style}}>
            <DropDownContainer />
          </div>
        </div>
      </div>
    );
  }

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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
