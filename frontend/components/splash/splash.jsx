import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import yip from '../../../app/assets/images/yip-logo.png';

class Splash extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     name: "",
  //   }
  //   this.udpateSearch = this.updateSearch.bind(this);
  // }

  // updateSearch(e) {
  //   console.log(this.state);
  //   this.setState({name: e.target.value});
  // }


  render (){
    return (
        <div className ="splash-page">
          <div className="overlay">
            <div className="splash-page-container">

              <NavBarContainer />

              <div className="logo-input-container">

                <img className="logo-splash" src={yip}></img>
                <div className="search-fields-container">

                  <div className="input-border-box">

                    <div className="Find"><p>Find</p></div>

                    <input type="text"
                      className="search-bar"
                      placeholder="cafes, tea, hotels...">
                    </input>

                    <div className="line"><p>|</p></div>
                    <div className="Near"><p>Near</p></div>
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
      </div>
    );
  }
}


export default Splash;
