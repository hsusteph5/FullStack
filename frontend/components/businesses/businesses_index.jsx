import React from 'react';
import BusinessesIndexItems from './businesses_index_items';
import querySearch from 'stringquery';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BestInSF from './best_in_SF';

class BusinessesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    }
  }


  componentDidMount() {
    let searchParams = this.props.location.search;
    let params = querySearch(searchParams);
    this.setState({name: params.name});
    this.props.fetchBusinesses({name: `${params.name}`});

    //need to clear out the search location
    this.props.location.search = "";
    // this.setState({name: ""})
  }


  render() {
    let businessName = this.props.businesses.map(
      business => <BusinessesIndexItems key={business.id} business={business}/>
    );
    return (
      <div>
        <div className="business-nav-background">
          <div className="business-nav-container">
            <NavBarContainer />

          </div>
        </div>

        <div className="best-in-SF-background">
          <BestInSF name={this.state.name}/>
        </div>

        <div className="splash-page-container">


          { businessName }

        </div>


      </div>
    );
  }
}

export default BusinessesIndex;
