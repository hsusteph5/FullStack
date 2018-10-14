import React from 'react';
import BusinessesIndexItems from './businesses_index_items';
import querySearch from 'stringquery';

class BusinessesIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    let searchParams = this.props.location.search;
    let params = querySearch(searchParams);
    this.props.fetchBusinesses({name: `${params.name}`});

    //need to clear out the search location
    this.props.location.search = "";
  }


  render() {
    let businessName = this.props.businesses.map(
      business => <BusinessesIndexItems key={business.id} business={business}/>
    );
    return (
      <div>
          { businessName }
      </div>
    );
  }
}

export default BusinessesIndex;
