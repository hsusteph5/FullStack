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

    this.query = "";
  }


//Why use componentDidMount vs COmponent did update??
  componentDidMount() {
    // debugger;
    if(this.query !== this.props.location.search) {
      let searchParams = this.props.location.search;
      //searchQuery will parse out the name into a { name: 'tea'}
      let params = querySearch(searchParams);

      // debugger;
      //decode URI parses out of the white spaces %20
      let decodeParams = decodeURI(params.name);
      this.setState({name: decodeParams});

      //since you are not visiting a new route, you need to see if the current params looks
      //like the next params
      this.query = searchParams;
      this.props.fetchBusinesses({name: `${decodeParams}`});
    }
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
