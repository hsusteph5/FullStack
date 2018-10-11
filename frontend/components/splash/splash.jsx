import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
  render (){
    return (
        <div className ="splash-page">
          <div className="overlay">
            <div className="splash-page-container">

              <NavBarContainer />
              
              <div className="search-fields-container">
                <div className="input-border-box">

                  <span className="Find">Find</span>
                  <input type="text" className="search-bar" placeholder="cafes, salons, hotels..." ></input>
                  <span className="Near">|</span>
                  <span className="Near">Near</span>
                  <input type="text" className="search-bar" placeholder="Financial District"></input>
                  <button className="search-icon"><i className="fas fa-search"></i></button>

                </div>
              </div>
              <footer className="credits">
                <p>Photo Credits Photo by Roman Kraft on Unsplash</p>
              </footer>

            </div>
        </div>
      </div>
    );
  }
}


export default Splash;
