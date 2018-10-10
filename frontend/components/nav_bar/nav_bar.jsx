import React from 'react';

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
        <p> Nav bar here</p>
      </div>
    );
  }
}

export default NavBar;



// <Link to="/signup">Sign up</Link>
// <Link to="/login">Login</Link>
