import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
  render (){
    return (
      <div>
        <NavBarContainer />
        <input type="text" placeholder="cafes, salons, hotels..." ></input>
        <input type="text" placeholder="Financial District"></input>
      </div>
    );
  }
}


export default Splash;
