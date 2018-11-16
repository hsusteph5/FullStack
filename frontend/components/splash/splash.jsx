import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import yip from '../../../app/assets/images/yip-logo.png';
import SearchContainer from '../search/search_container';
import CategoriesContainer from '../search/categories_container';
import FooterSplashComponent from './footer_index';

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
                  <p>Photo Credits by Roman Kraft</p>

                </div>


              </div>

            </div>
        </div>
        <FooterSplashComponent />
      </div>
    );
  }
}


export default Splash;