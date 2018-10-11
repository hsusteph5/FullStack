import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, logout}) => {
  //if this user exists
  if(user){
    return (
      <div>
        <h2>Hello {user.fname} {user.lname}</h2>
        <button onClick={() => logout()}>Logout</button>
      </div>);
  } else {
    return (
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default NavBar;
