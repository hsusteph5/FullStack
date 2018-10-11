import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../public/images/user-icon.png';

const NavBar = ({ user, logout}) => {
  //if this user exists
  if(!user){
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
                    <img src={icon}></img>
                    <div className="dropdown">

                      <div className='dropdown-button'>
                        <i className="fas fa-sort-down"></i>
                      </div>

                      <div className="dropdown-content">

                            <img src={icon}></img>
                            <div className="user-info">
                              <Link to="/">{user.fname} {user.lname}</Link>
                              <p>San Francisco, CA</p>
                              <div className="nav-icons">
                                <i className="fas fa-user-friends"></i>
                                <div className="user-star"><i className="fas fa-star"></i></div>
                              </div>
                            </div>

                            <div className="button-container">
                              <button onClick={() => logout()}><i className="fas fa-user"></i>About Me</button>

                              <button className="logout-button" onClick={() => logout()}>Logout</button>
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

export default NavBar;


//for signing out
// <h2>Hello {user.fname} {user.lname}</h2>
// <button onClick={() => logout()}>Logout</button>
