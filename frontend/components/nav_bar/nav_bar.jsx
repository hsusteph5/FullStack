import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../app/assets/images/user-icon.png';
import Modal from '../modal/modal';

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

              <Modal />

              <ul>
                  <li className="user-icon">
                      <img src={icon}></img>

                      <div className="dropdown-container">

                        <div className='dropdown-button'>
                          <i className="fas fa-sort-down"></i>
                        </div>

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
                                <button onClick={() => logout()}><i className="fas fa-user"></i>About Me</button>

                                <button className="logout-button" onClick={this.props.logout}>Logout</button>
                              </div>


                        </div>

                    </div>
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
