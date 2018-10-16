import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import yip from '../../../app/assets/images/yip-logo.png';
import cityscape_illustration from '../../../app/assets/images/cityscape.png';
import SearchContainer from '../search/search_container';
import CategoriesContainer from '../search/categories_container';

class Splash extends React.Component {
  render (){
    return (
        <div className ="splash-page">
          <div className="overlay">
            <div className="splash-page-container">

              <NavBarContainer />

              <div className="logo-input-container">

                <img className="logo-splash" src={yip}></img>
                <SearchContainer height="45px" fontsize="20px"/>

                <CategoriesContainer />

                <div className="photo-credits">
                  <p>Photo Credits Photo by Roman Kraft on Unsplash</p>
                </div>


              </div>

            </div>
        </div>
        <footer className="credits">
          <div className="all-credits">
            <h3> Credits </h3>
            <ul>
              <li><p> Photo by rawpixel on Unsplash </p></li>
            </ul>
          </div>

          <img src={cityscape_illustration} alt="cityscape_illustration"></img>
        </footer>
      </div>
    );
  }
}

// <div>
//   <h3>About</h3>
//   <ul>
//     <li>Github</li>
//   </ul>
// </div>

export default Splash;
