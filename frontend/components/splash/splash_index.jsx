import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import yip from '../../../app/assets/images/yip-logo.png';
import SearchContainer from '../search/search_container';
import CategoriesContainer from '../search/categories_container';
import FooterSplashComponent from './footer_index';
import YipSFComponent from './Yip_SF_Component';
import BrowseCategory from './browse_category.jsx';
import SplashSoftware from './splash_software';

class SplashIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusinesses( {name: "" });
  }

  render (){
    let threeBusinesses = this.props.businesses.slice(0, 3);
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
                  <p>Photo by Roman Kraft</p>
                </div>
              </div>
            </div>
        </div>
        <YipSFComponent businesses={threeBusinesses} />
        <BrowseCategory fetchBusinesses={this.props.fetchBusinesses}/>
        <SplashSoftware />
        <FooterSplashComponent />

      </div>
    );
  }
}


export default SplashIndex;