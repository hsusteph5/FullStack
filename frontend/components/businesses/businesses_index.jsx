import React from 'react';
import BusinessesIndexItems from './businesses_index_items';
import NavBarContainer from '../nav_bar/nav_bar_container';
import BestInSF from './best_in_SF';
import CategoriesContainer from '../search/categories_container';
import { parseSearch } from '../../util/parsing_manager.jsx';


class BusinessesIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      name: ""
    }

    this.parseFetchBusiness = this.parseFetchBusiness.bind(this);
  }

//when the url reached is not the same as the previous url saved, fetch new businesses
  parseFetchBusiness() {
    if(this.state.query !== this.props.location.search) {
      let searchParams = this.props.location.search;
      //searchQuery will parse out the name into a { name: 'tea'}
      let parseParams = parseSearch(searchParams);

      //decode URI parses out of the white spaces %20
      let decodeParams = decodeURI(parseParams);
      //save the query string into the local state and save the category into the local state
      this.setState({query: searchParams, name: decodeParams});

      //since you are not visiting a new route, you need to see if the current params looks
      //like the next params
      this.props.fetchBusinesses({name: `${decodeParams}`});
    }
  }

  componentDidMount() {
    this.parseFetchBusiness();
  }

  // componentDidUpdate() {
  //   this.parseFetchBusiness();
  // }

//pass down this.props.fetchBusinesses down to the index-items so that
//the index-items can fetchBusinesses upon calling searchBusinesses
  render() {
    let businessName = this.props.businesses.map(
      business =>
        <BusinessesIndexItems
          key={business.id}
          business={business}
          fetchBusinesses={this.props.fetchBusinesses}
          fetchBusiness={this.props.fetchBusiness}
          reviews={this.props.reviews}
        />
    );
    return (
      <div>

        <div className="business-nav-background">
          <div className="business-nav-container">
            <NavBarContainer />
          </div>
        </div>

        <div className="background-categories-container">
          <CategoriesContainer />
          <button className="categories-write-review">
            <i className="fas fa-pencil-alt"></i>
            Write a Review
          </button>
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
