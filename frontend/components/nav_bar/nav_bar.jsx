import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../app/assets/images/user-icon.png';
import { withRouter } from "react-router";
import SearchContainer from '../search/search_container';
import yip from '../../../app/assets/images/yip-logo.png';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "demo@demo.com",
      password: "password",
      fname: "Stephanie",
      lname: "Hsu"
    }
    this.demoLogin = this.demoLogin.bind(this);

  }

  demoLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.loginUser(user);
  }

  render() {
    let right = (
      <ul>
        <li><Link to="/login">Log In</Link></li>
        <li><Link className="signup-nav" to="/signup">Sign Up</Link></li>
        <li className="demo-user-list">
          <button className="demo-user-button"
            onClick={this.demoLogin}>Demo User
          </button>
        </li>
      </ul>
    );
    let left = (
      <ul>
        <li><Link className="writeReview" to="/">Write a Review</Link></li>
      </ul>
    );


    //if current user exists, the modal should always be there
    if (this.props.user) {
      right = (
        <ul>
            <li className="user-icon">
                <img onClick = {() => this.props.openModal('dropdown')} src={icon}></img>
            </li>
        </ul>
      );

      //if the person is logged in and viewing business
      if(this.props.location.pathname.includes("/businesses")){
        left = (
          <ul>
            <li className="nav-input-size">
                <Link to="/"><img className="business-logo" src={yip}></img></Link>
                <SearchContainer height="35px" />
            </li>
          </ul>
        );
      }

    //if the pathname is businesses
  } else if (this.props.location.pathname.includes("/businesses")) {
      left = (
        <ul>
          <li className="nav-input-size">
              <Link to="/"><img className="business-logo" src={yip}></img></Link>
              <SearchContainer height="35px" fontsize="16px"/>
          </li>
        </ul>
      );
      right = (
        <ul>
          <li className="businesses-button-list">
            <Link className="businesses-login-button" to="/login">Log In</Link>
          </li>
          <li className="businesses-button-list">
            <Link className="businesses-sign-up-button" to="/signup">Sign Up</Link>
          </li>
        </ul>
      );
    };
    return (
      <div className="nav-bar">
        <nav className="nav-bar-container">
          <div className="left-bar-navigation">
            { left }
          </div>

          <div className="right-bar-navigation">
            { right }
          </div>

        </nav>
      </div>
    );
  }
}


const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
