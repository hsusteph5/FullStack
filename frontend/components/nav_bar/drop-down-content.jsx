import React from 'react';
import icon from '../../../app/assets/images/user-icon.png';
import { Link } from 'react-router-dom';
//need to add logout

class DropDownContent extends React.Component {
  constructor(props){
    super(props);
    this.logoutClose.bind(this);
  }


  logoutClose() {
    this.props.closeModal();
    this.props.logout();
  }


  render() {
    return (
      <div>
        <div className="dropdown-container">
          <div className="dropdown-content">
              <img src={icon}></img>
              <div className="user-info">
                <Link to="/">{this.props.user.fname} {this.props.user.lname.slice(0,1)}.</Link>
                <p>San Francisco, CA</p>
                <div className="nav-icons">
                  <i className="fas fa-user-friends"></i>
                  <div className="user-star"><i className="fas fa-star"></i></div>
                </div>
              </div>
              <div className="button-container">
                <button><i className="fas fa-user"></i>About Me</button>
                <button className="logout-button" onClick={() => this.logoutClose()}>Logout</button>
              </div>
          </div>
      </div>
      </div>
    );
  }
}


export default DropDownContent;
