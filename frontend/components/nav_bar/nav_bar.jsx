import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../app/assets/images/user-icon.png';

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
    if(!this.props.user){
      return (
        <div className="nav-bar">
          <nav className="nav-bar-container">
            <div className="left-bar-navigation">
              <ul>
                <li><Link className="writeReview" to="/">Write a Review</Link></li>
              </ul>
            </div>
            <div className="right-bar-navigation">
              <ul>
                <li><Link to="/login">Log In</Link></li>
                <li><Link className="signup-nav" to="/signup">Sign Up</Link></li>
                <li className="demo-user-list"><button className="demo-user-button" onClick={this.demoLogin}>Demo User</button></li>
              </ul>
            </div>
          </nav>
        </div>);
    } else {
      return (
        <div className="nav-bar">
          <nav className="nav-bar-container">
            <div className="left-bar-navigation">
              <ul>
                <li><Link className="writeReview" to="/">Write a Review</Link></li>
              </ul>
            </div>
            <div className="right-bar-navigation">

              <ul>
                  <li className="user-icon">
                      <img onClick = {() => this.props.openModal('dropdown')} src={icon}></img>

                  </li>
              </ul>
            </div>
          </nav>
        </div>);
      }
    }
}

export default NavBar;


//for signing out
// <h2>Hello {user.fname} {user.lname}</h2>
// <button onClick={() => logout()}>Logout</button>
